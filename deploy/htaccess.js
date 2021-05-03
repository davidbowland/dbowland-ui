import fs from 'fs'

const FILE_NAME = '.htaccess'

// Generate an htaccess file pointing to the latest version folder
// It's necessary to set https and strip www here to prevent exposing the internal URI

export const getRootHtaccessContents = (currentVersion, previousVersion) => {
  const previousVersionRedirect = previousVersion
    ? `# If the requested file exists in the prior version, serve that
  RewriteCond %{DOCUMENT_ROOT}/${previousVersion}%{REQUEST_URI} -f
  RewriteRule ^ /${previousVersion}%{REQUEST_URI} [L]`
    : `# No previous version available for fallback`

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

  # If the requested file exists in the current version, serve that
  RewriteCond %{DOCUMENT_ROOT}/${currentVersion}%{REQUEST_URI} -f
  RewriteRule ^ /${currentVersion}%{REQUEST_URI} [L]

  ${previousVersionRedirect}

  # If the request isn't a valid file, serve from current version
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^ /${currentVersion}%{REQUEST_URI} [L]

</IfModule>

# Disallow directory indexing
Options -Indexes

# Turn on IE8-IE9 XSS prevention tools
Header set X-XSS-Protection "1; mode=block"

# Prevent the site from being loaded in an off-site frame
Header set X-Frame-Options SAMEORIGIN

# Prevent mime based attacks
Header set X-Content-Type-Options "nosniff"

# Remove PHP Powered-By header
Header unset X-Powered-By
`
}

export const generateRootHtaccessFile = (outputDirectory, currentVersion, previousVersion) => {
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true })
  }
  const path = `${outputDirectory}/${FILE_NAME}`
  fs.writeFileSync(path, getRootHtaccessContents(currentVersion, previousVersion))
  return path
}

export default {
  generateRootHtaccessFile,
  getRootHtaccessContents,
}
