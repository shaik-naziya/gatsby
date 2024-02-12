import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
// import styles from "../styles/home.module.css"
import "../styles/global.css"

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section>
        <div>
          <h2>Home Page</h2>
          <h3>welcome to homepage</h3>
          <p>UX designer & web developer based in manchester.</p>
          <Link className="btn" to="/projects">
            Gatsby Project
          </Link>
        </div>
        <img
          className="img-banner"
          src="https://www.shutterstock.com/image-vector/web-design-template-vector-illustration-260nw-1362330779.jpg"
          alt="side image"
          style={{ maxWidth: "100%", maxHeight: "80%" }}
        />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query siteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
