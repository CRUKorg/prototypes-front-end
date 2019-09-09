const path = require('path');

module.exports = {
  siteTitle: `Cancer Research UK | Starling`,
  siteTitleShort: `Starling`,
  siteDescription: `A design system is basically the story of how an organization builds a digital product.`,
  siteUrl: `https://www.cancerresearchuk.org/`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/cruk-logo.svg'),
  social: {
    twitter: `CR_UK`,
    fbAppId: ``,
  },
  headerLinks: [
    {
      name:`Writing`,
      link:`/definitions-and-capitalization`,
    },
    {
      name:`Visual`,
      link:`/design`,
    },
    {
      name:`Components`,
      link:`/components`,
    },
    {
      name:`Guidelines`,
      link:`/accessibility`,
    },
  ],
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
