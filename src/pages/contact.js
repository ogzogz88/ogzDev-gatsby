import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact | ogzDev" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xeqppjob" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="name" className="form-control" required />
              <input type="email" name="_replyto" placeholder="email" className="form-control" required />
              <textarea name="message" cols="30" rows="10" placeholder="say hello" className="form-control" required></textarea>
            </div>
            <button type="submit" className="btn submit-btn">submit</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
