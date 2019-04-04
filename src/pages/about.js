import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <h1>Hi this is About Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default aboutPage