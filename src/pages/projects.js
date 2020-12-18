import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

// ...GatsbyImageSharpFluid

const ProjectsPage = ({ data: { allStrapiProjects: { nodes: projects } } }) => {

  return (
    <Layout >
      <SEO title="Projects | ogzDev" />
      <section className="projects-page">
        <Projects projects={projects} title={"all projects"} />
      </section>
    </Layout>
  )
}
export const query = graphql`
{
  allStrapiProjects {
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
}
`
export default ProjectsPage
