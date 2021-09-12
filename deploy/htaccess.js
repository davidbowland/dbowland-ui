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

<IfModule mod_deflate.c>

  # Enable compression on the listed types
  AddOutputFilterByType DEFLATE text/text text/html text/plain text/xml text/css application/x-javascript application/javascript application/json image/png image/jpg image/jpeg image/gif image/webp font/otf font/ttf font/woff2

</IfModule>

# Most files (HTTP, JSON, etc) don't cache
Header set Cache-Control "no-cache, private"
# CSS & JavaScript files cache for a year
<FilesMatch "\.(css|js)$">
  Header set Cache-Control "max-age=31536000, private"
</FilesMatch>
# Image files cache for a year
<FilesMatch "\.(png|gif|jpg|webp)$">
  Header set Cache-Control "max-age=31536000, private"
</FilesMatch>
# Font files cache for a year
<FilesMatch "\.(otf|ttf|woff2)$">
  Header set Cache-Control "max-age=31536000, private"
</FilesMatch>

# Disallow directory indexing
Options -Indexes

# Turn on IE8-IE9 XSS prevention tools
Header set X-XSS-Protection "1; mode=block"

# Don't allow cookies to be accessed by JavaScript or on insecure connections
Header always edit Set-Cookie (.*) "$1; HTTPOnly; Secure"

# Prevent the site from being loaded in an off-site frame
Header set X-Frame-Options SAMEORIGIN

# Prevent mime based attacks
Header set X-Content-Type-Options "nosniff"

# Set Content Security Policy
Header set X-Content-Security-Policy "default-src 'self'"

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
