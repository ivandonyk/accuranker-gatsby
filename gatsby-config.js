module.exports = {
  siteMetadata: {
    title: "accuranker",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "gNAz5s3S6bcgnPLbEQ9Mwtlg5z-kABTlmGQnUf-d0pk",
        spaceId: "tdpyozytknjz",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-graphql-codegen",
  ],
};
