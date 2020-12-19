import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
{
  file(relativePath: {eq: "ogz-hero.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    }
  } = useStaticQuery(query);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h4>Hello!</h4>
            <div className="underline"></div>
            <h1>I'm Oğuzhan.</h1>
            <h4>Self-taught frontend web developer.</h4>
            <Link to="/contact" className="btn">contact me</Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img blob" />
      </div>
    </header>
  )
}

export default Hero
