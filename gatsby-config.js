require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Visier`,
    siteUrl: `https://visier.com`,
    author: `James Yi`,
  },
  plugins: [
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WORDPRESS',
        fieldName: 'wp',
        url: 'https://dev-visier.pantheonsite.io/graphql',
        refetchInterval: 60,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
