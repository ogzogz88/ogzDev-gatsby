import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
const BlogSidebar = ({ id, title, date, category, slug }) => {
    return (
        <Link to={`/blogs/${slug}`} key={id} className="blog">
            <article>
                <blog className="blog-card">
                    <h5 >{title}</h5>
                    <div className="blog-footer-sidebar">
                        <p>
                            {category}
                        </p>
                        <p>{date}</p>
                    </div>
                </blog>
            </article>
        </Link>
    )
}

BlogSidebar.propTypes = {}

export default BlogSidebar