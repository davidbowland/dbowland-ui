import fs from 'fs'
import path from 'path'
import ssh2 from 'ssh2'

import htaccess from './htaccess.js'

const LOCAL_DIR = 'public'
const SSH_CONFIG = {
  host: 'dbowland.com',
  port: 22,
  username: process.env.DBOWLAND_SSH_USER,
  password: process.env.DBOWLAND_SSH_PASS,
}
const VERSION_PREFIX = 'version'
const BASE_HTML_DIR = 'public_html'
const FILE_BATCH_SIZE = 15
const DEPLOY_DIR = 'deploy'
const TEMP_DIR = `${DEPLOY_DIR}/temp`

/* Deploy components */

// Generate a unique version based on Unix time

const getVersion = () => {
  const unixTimeString = new Date().getTime().toString()
  return `${VERSION_PREFIX}-${unixTimeString}`
}

// Query file list

const getDirectoryContents = async (sftp, path) => {
  return await new Promise((resolve, reject) => {
    sftp.readdir(path, (err, fileList) => {
      if (err) reject(err)
      else resolve(fileList)
    })
  })
}

// Query old folders

const getExistingVersions = async (sftp) => {
  const directoryContents = await getDirectoryContents(sftp, BASE_HTML_DIR)
  const versionList = directoryContents.reduce((acc, cur) => {
    const isDirectory = cur.longname.startsWith('d')
    if (isDirectory && cur.filename.startsWith(`${VERSION_PREFIX}-`)) {
      acc[cur.filename] = cur
    }
    return acc
  }, {})
  return versionList
}

// Create new directory

const createDirectory = async (sftp, path) => {
  await new Promise((resolve, reject) => {
    sftp.mkdir(path, 777, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
  // console.debug(`* Directory ${path} created`)
}

// Upload a single local file

const uploadFile = async (sftp, localPath, remotePath) => {
  await new Promise((resolve, reject) => {
    sftp.fastPut(localPath, remotePath, (err) => {
      if (err) reject(err)
      else {
        // console.debug(`** File ${localPath} uploaded`)
        resolve()
      }
    })
  })
}

// Upload a local directory

const uploadDirectory = async (sftp, localDir, remoteDir) => {
  // Compile a list of local files and directories
  const directoryList = []
  const fileList = []
  for (const name of fs.readdirSync(localDir)) {
    if (fs.statSync(`${localDir}/${name}`).isDirectory()) {
      directoryList.push(name)
    } else {
      fileList.push(name)
    }
  }

  // Create directory for upload
  await createDirectory(sftp, remoteDir)

  // Upload files, in batches
  while (fileList.length > 0) {
    await Promise.all(
      fileList
        .splice(0, FILE_BATCH_SIZE)
        .map((fileName) => uploadFile(sftp, `${localDir}/${fileName}`, `${remoteDir}/${fileName}`))
    )
  }

  // Upload directories one at a time
  for (const dirName of directoryList) {
    await uploadDirectory(sftp, `${localDir}/${dirName}`, `${remoteDir}/${dirName}`)
  }
  // console.debug(`* Directory ${localDir} uploaded`)
}

// Remove a single remote file

const removeRemoteFile = async (sftp, path) => {
  await new Promise((resolve, reject) => {
    sftp.unlink(path, (err) => {
      if (err) reject(err)
      else {
        // console.debug(`** File ${path} removed`)
        resolve()
      }
    })
  })
}

// Remove a remote directory

const removeRemoteDirectory = async (sftp, path) => {
  // Compile a list of remote files and directories
  const directoryContents = await getDirectoryContents(sftp, path)
  const directoryList = []
  const fileList = []
  for (const file of directoryContents) {
    const isDirectory = file.longname.startsWith('d')
    if (isDirectory) {
      directoryList.push(file.filename)
    } else {
      fileList.push(file.filename)
    }
  }

  // Remove directories
  for (const dirName of directoryList) {
    await removeRemoteDirectory(sftp, `${path}/${dirName}`)
  }

  // Remove files, in batches
  while (fileList.length > 0) {
    await Promise.all(
      fileList
        .splice(0, FILE_BATCH_SIZE)
        .map((fileName) => removeRemoteFile(sftp, `${path}/${fileName}`))
    )
  }

  // Remove this directory
  await new Promise((resolve, reject) => {
    sftp.rmdir(path, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
  // console.debug(`* Directory ${path} removed`)
}

// Set current version

const setCurrentVersion = async (sftp, currentVersion, previousVersion) => {
  const htaccessFilePath = htaccess.generateRootHtaccessFile(
    TEMP_DIR,
    currentVersion,
    previousVersion
  )
  await uploadFile(sftp, htaccessFilePath, `${BASE_HTML_DIR}/.htaccess`)
}

/* Deploy proper */

const deploy = async (sftp) => {
  const currentVersion = getVersion()
  const targetFolderName = `${BASE_HTML_DIR}/${currentVersion}`
  console.log(`Deploying local ${LOCAL_DIR}/ to remote ${targetFolderName}/`)

  const existingVersions = await getExistingVersions(sftp)
  if (existingVersions.length == 0) {
    console.log(`No existing versions found`)
  } else {
    console.log(`Found existing versions: `, existingVersions)
  }
  const previousVersion =
    existingVersions.length === 0
      ? undefined
      : Object.keys(existingVersions).reduce((acc, cur) =>
          existingVersions[cur].attrs.mtime > existingVersions[acc].attrs.mtime ? cur : acc
        )
  if (previousVersion !== undefined) {
    console.log(`Found most recent previous version: ${previousVersion}`)
  }

  console.log('Uploading files')
  await uploadDirectory(sftp, LOCAL_DIR, targetFolderName)
  console.log(`Directory ${LOCAL_DIR}/ successfully copied to ${targetFolderName}/`)

  await setCurrentVersion(sftp, currentVersion, previousVersion)
  console.log(`Set current version to ${currentVersion} and previous version to ${previousVersion}`)

  if (existingVersions.length == 0) {
    console.log(`No old versions to remove`)
  } else {
    console.log('Removing old versions')
    for (const path of existingVersions) {
      await removeRemoteDirectory(sftp, `${BASE_HTML_DIR}/${path}`)
    }
    console.log(`Old versions successfully removed`)
  }
}

/* SSH/SFTP connection */

const sendSftpConnection = (callback) => {
  const connection = new ssh2.Client()
  connection
    .on('ready', () => {
      // console.debug(`Client successfully connected`)
      connection.sftp(async (err, sftp) => {
        try {
          if (err) throw err
          await callback(sftp)
        } finally {
          connection.end()
          // console.debug('Client disconnected')
        }
      })
    })
    .connect(SSH_CONFIG)
}

/* Effect deploy */

sendSftpConnection(deploy)
