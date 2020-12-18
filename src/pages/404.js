import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="404 not found page | ogzDev" />
      <main className="error-page">
        <div className="error-container">
          <h1>ooopsss, it is a dead end!</h1>
          <Link to="/" className="btn">back home</Link>
        </div>
      </main>
    </Layout>

  )
}

export default Error
