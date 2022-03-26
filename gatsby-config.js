/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
if (process.env.DEVELOPMENT) {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

module.exports = {
  plugins: [
    {
      options: {
        alias: {
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@config': 'src/config',
          '@pages': 'src/pages',
          '@test': 'test',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
      resolve: 'gatsby-plugin-alias-imports',
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      __key: 'images',
      options: {
        name: 'images',
        path: 'src/assets/images/',
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      __key: 'pages',

      options: {
        name: 'pages',
        path: 'src/pages/',
      },
      resolve: 'gatsby-source-filesystem',
    },
  ],
  siteMetadata: {
    siteUrl: 'https://dbowland.com/',
    title: 'David Bowland',
  },
}
