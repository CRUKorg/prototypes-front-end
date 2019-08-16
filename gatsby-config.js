const siteConfig = require('./site-config');
const contentfulConfig = require('./contentful.config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-atom`,
      options: {
        source: `https://github.com/CRUKorg/prototypes-front-end/commits/starling.atom`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: contentfulConfig.spaceId,
        accessToken: contentfulConfig.accessToken,
      }
    },
  ],
};
