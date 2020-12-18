import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  {
    allSite {
      nodes {
        siteMetadata {
          author
          siteDesc : description
          image
          siteUrl
          siteTitle: title
          twitterUsername
        }
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const data = useStaticQuery(query);
  const { allSite: { nodes: meta } } = data;
  const { siteMetadata: { author, siteDesc, image, siteUrl, siteTitle, twitterUsername } } = meta[0];
  return (
    <Helmet
      // Two ways to add meta tags
      // 1. add as a prop
      // 2. add as a meta tag
      title={siteTitle}
      htmlAttributes={{ lang: "en" }}
      title={`${title || siteTitle}`}
    >
      <meta name="description" content={`${description || siteDesc}`} />
      <meta name="image" content={image} />
      <meta name="author" content={author} />
      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}



export default SEO
