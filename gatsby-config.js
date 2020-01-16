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
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
  ],
  siteMetadata: {
    defaultTitle: "Jeremy Personal Site",
    defaultDescription: "Jeremy's personal site and portfolio",
    siteUrl: "https://www.jeremyrd.dev",
    defaultImage: "",
    twitterUsername: "@username",
  },
}
