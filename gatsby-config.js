module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "kitten",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 600
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "kittendata",
        fieldName: "kittendata",
        url: "https://api-us-east-1.graphcms.com/v2/ckvvdk5cc266601z53bjr1dy1/master"
      }
    }
  ],
};
