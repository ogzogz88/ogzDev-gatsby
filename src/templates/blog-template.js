import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import { BlogsSidebar } from '../components/BlogsSidebar'
import SEO from "../components/SEO"


const ComponentName = ({ data }) => {
  const { content, title, desc } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center ">
          <div className="blog-detail-layout">
            <article className="blog-content blog-detail">
              <h3>{title}</h3>
              <div className="underline-left"></div>
              {
                <ReactMarkdown source={content} />
              }
              <Link className="btn center-btn" to="/blog">Blog</Link>

            </article>
            <div className="blogs-all">
              <BlogsSidebar />
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`



export default ComponentName
