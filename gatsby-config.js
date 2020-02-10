module.exports = {
  plugins: [
    // "gatsby-plugin-top-layout",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: "UA-156902943-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true
      }
    }
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
  ],
  siteMetadata: {
    defaultTitle: "Jeremy Personal Site",
    defaultDescription: "Jeremy's personal site and portfolio",
    siteUrl: "https://www.jeremyrd.dev",
    defaultImage: "",
    twitterUsername: "@username"
  }
};
