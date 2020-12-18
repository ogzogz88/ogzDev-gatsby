import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"


const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs }
  }
}) => {
  return (
    <Layout>
      <SEO title="Blog | ogzDev" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="All Blog Posts" />
      </section>
    </Layout>
  )
}


export const query = graphql` 
{
  allStrapiBlogs {
    nodes {
      date
      desc
      id
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slug
      title
      category
    }
  }
}

`

export default Blog
