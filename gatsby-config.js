module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingIds: ["UA-156902943-1"],
        // Puts tracking script in the head instead of the body
        pluginConfig: {
          head: true,
          respectDNT: true,
          anonymize: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    // "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    }
  ],
  siteMetadata: {
    defaultTitle: "Jeremy Personal Site",
    defaultDescription: "Jeremy's personal site and portfolio",
    siteUrl: "https://www.jeremyrd.dev",
    defaultImage: "",
    twitterUsername: "@jeremyarde"
  }
};
