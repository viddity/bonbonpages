module.exports = {
  siteMetadata: {
    title: `bonbonPages`,
    description: `Learning how to gatsby`,
    author: `@viddity`,
  },
  plugins: [
    {resolve: `gatsby-plugin-react-helmet`},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {resolve: `gatsby-transformer-sharp`},
    {resolve: `gatsby-plugin-sharp`},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `${__dirname}/src/images/music.jpg`,
      },
    },
    {
      resolve: `gatsby-remark-embed-video`,
      options: {
        width: 800,
        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
        height: 600, // Optional: Overrides optional.ratio
        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true //Optional: Disable insertion of <style> border: 0
      }
    },
    {resolve: `gatsby-plugin-sass`},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
