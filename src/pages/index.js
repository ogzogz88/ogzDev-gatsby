import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({ data }) => {

  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
    allStrapiHeroes: { nodes: heroes }
  } = data;
  return (
    <Layout atMainPage={true}>
      <SEO
        title="Home | ogzDev | Frontend Web Developer"
        description="Home | A self-taughed web developer, javascript and CSS enthusiast, using javascript, typescript, react, nodeJS"
      />
      <Hero heroes={heroes} />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latest articles" showLink />
    </Layout>
  )

}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        description
        featured
        github
        id
        title
        url
        stack {
          id
          title
        }
        strapiId
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiBlogs(limit: 3, sort: {fields: date, order: DESC}) {
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
    allStrapiHeroes {
      nodes {
        heroImg {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

  }
`
// ...GatsbyImageSharpFluid
