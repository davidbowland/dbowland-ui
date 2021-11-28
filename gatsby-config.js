module.exports = {
  siteMetadata: {
    title: 'David Bowland',
    siteUrl: 'https://dbowland.com/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@test': 'test',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        www: false,
        SymLinksIfOwnerMatch: false,
        host: 'dbowland.com', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 400 /400
          ErrorDocument 403 /403
          ErrorDocument 404 /404
          ErrorDocument 500 /500
        `,
        redirect: [
          'RewriteRule ^github https://github.com/davidbowland [R=302,NC,L]',
          'RewriteRule ^linked\\-?in https://www.linkedin.com/in/david-bowland-257980a1/ [R=302,NC,L]',
          'RewriteRule ^seancarrollama https://drive.google.com/file/d/1g-VP1P0n2F3XlksaqS4O0CUe6lrL7neV/view?usp=sharing [R=302,NC,L]',
          'RewriteRule ^humor(/.*)$ https://jokes.bowland.link$1 [R=302,NC,L]',
          'RewriteRule ^formsubmit /form-submit [R=301,NC,L]',
        ],
        custom: `
# Don't allow cookies to be access by JavaScript or on insecure connections
Header always edit Set-Cookie (.*) "$1; HTTPOnly; Secure"

# Turn on IE8-IE9 XSS prevention tools
Header set X-XSS-Protection "1; mode=block"

# Prevent the site from being loaded in an off-site frame
Header set X-Frame-Options SAMEORIGIN

# Prevent mime based attacks
Header set X-Content-Security-Policy "allow 'self'; script-src www.google.com www.gstatic.com"

# The directory index is index.html
DirectoryIndex index.html
        `,
      },
    },
  ],
  flags: { PRESERVE_WEBPACK_CACHE: true },
}
