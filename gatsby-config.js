/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "ogzDev | Frontend Web Developer",
    description: "A self-taughed web developer, javascript and CSS enthusiast, using javascript, typescript, react, nodeJS",
    author: "Oğuzhan Alagöz",
    twitterUsername: "@sibumi10",
    image: "/twitter-img.png",
    siteUrl: "https://ogzdev.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://agile-hollows-45221.herokuapp.com"
          : "http://localhost:1337",
        queryLimit: 1000,
        // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // {
          //   family: `Roboto`,
          //   variants: [`400`, `700`],
          // },
          // {
          //   family: `Open Sans`,
          // },
          `Roboto`,
          `source Open Sans\:400,700`
        ],
        display: 'swap'
      },
    },
  ],
}
