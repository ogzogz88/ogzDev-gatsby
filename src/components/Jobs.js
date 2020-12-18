import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: id, order: ASC}) {
      nodes {
        id
        company
        date
        description {
          id
          name
        }
        position
        strapiId
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query);
  const { allStrapiJobs: { nodes: jobs } } = data;
  const [jobIndex, setJobIndex] = useState(0);
  const { company, position, date, description } = jobs[jobIndex];

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className={`job-btn ${index === jobIndex && "active-btn"}`}
                key={job.strapiId}
                onClick={() => setJobIndex(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {
            description.map(item => {
              return (
                <div key={item.id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{item.name}</p>
                </div>
              )
            })
          }
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
