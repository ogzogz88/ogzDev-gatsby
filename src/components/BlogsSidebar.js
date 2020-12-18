import React from "react"
import Title from "./Title"
import BlogSidebar from "./BlogSidebar"
import { graphql, StaticQuery } from "gatsby"



export const BlogsSidebar = () => {
    return (

        <StaticQuery
            query={graphql`
            query HeadingQuery {
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
            }}}
         `}
            render={data => (
                <section >
                    <h3 className="blog-sidebar-header">Latest Articles</h3>
                    <div className="underline"></div>

                    <div className="blog-sidebar">
                        {
                            data.allStrapiBlogs.nodes.map(blog => {
                                return (
                                    <BlogSidebar key={blog.id} {...blog} />
                                )
                            })
                        }
                    </div>
                </section>
            )}
        />

    )
}
