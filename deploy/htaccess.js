import fs from 'fs'

const FILE_NAME = '.htaccess'

// Generate an htaccess file pointing to the latest version folder
// It's necessary to set https and strip www here to prevent exposing the internal URI

export const getRootHtaccessContents = (version) => {
  return `<IfModule mod_rewrite.c>

  # Handle some root redirects
  RewriteEngine On

  # Enforce https
  RewriteCond %{HTTP:X-Forwarded-Proto} !https
  RewriteCond %{HTTPS} off
  RewriteRule ^ https://dbowland.com%{REQUEST_URI} [R=301,L]

  # Suppress www
  RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
  RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L]

  # Redirect all other requests to the current version
  RewriteRule !^/version /${version}%{REQUEST_URI} [L]

</IfModule>
`
}

export const generateRootHtaccessFile = (outputDirectory, version) => {
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true })
  }
  const path = `${outputDirectory}/${FILE_NAME}`
  fs.writeFileSync(path, getRootHtaccessContents(version))
  return path
}

export default {
  generateRootHtaccessFile,
  getRootHtaccessContents,
}
