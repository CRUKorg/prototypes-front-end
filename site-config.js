const path = require('path');

module.exports = {
  siteTitle: `Cancer Research UK | Starling`,
  siteTitleShort: `Starling`,
  siteDescription: `Design systems are made from many ingredients that come together to help the organization tell the story of how they design and build digital things.`,
  siteUrl: `https://www.cancerresearchuk.org/`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/cruk-logo.svg'),
  social: {
    twitter: `CR_UK`,
    fbAppId: ``,
  },
  footerLinks: [
    {
      name:`Find Team Starling`,
      link:`https://tinyurl.com/y4hz4fyu`,
    },
    {
      name:`Drop us an email`,
      link:`mailto:Tech-ProjectStarling@CancerResearchUKO365.onmicrosoft.com`,
    },
    {
      name:`Github`,
      link:`https://github.com/CRUKorg/prototypes-front-end/tree/starling`,
    },
  ],
};
