module.exports = {
  siteMetadata: {
    title: 'David Bowland',
    siteUrl: 'https://dbowland.com/'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@images': 'src/images',
          '@pages': 'src/pages',
          '@styles': 'src/styles'
        },
        extensions: [
          'js', 'jsx', 'ts', 'tsx'
        ],
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images/',
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
          ErrorDocument 400 400/index.html
          ErrorDocument 401 401/index.html
          ErrorDocument 403 403/index.html
          ErrorDocument 404 404/index.html
          ErrorDocument 500 500/index.html
        `,
        redirect: [
          'Redirect 301 /github https://github.com/davidbowland',
          'Redirect 301 /linkedin https://www.linkedin.com/in/david-bowland-257980a1/',
          'Redirect 301 /seancarrollama https://drive.google.com/file/d/1g-VP1P0n2F3XlksaqS4O0CUe6lrL7neV/view?usp=sharing',
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
        `,
      },
    }
  ],
}
