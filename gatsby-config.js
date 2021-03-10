const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://github.com/filipebfernandes/github-repos",
    title: "Github repos App",
    author: "Filipe Fernandes",
    description:
      "Github repos app using the GitHub GraphQL API. Made with Gastby",
    keywords: "gatsby, starter, eslint, postcss, analytics, typescript",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "trackingIDhere",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        root: path.join(__dirname, "src"),
      },
    },
    "gatsby-plugin-sitemap",
  ],
};
