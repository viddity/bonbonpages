import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="bonbonpages Projects" />
    <h1>Hi from the Projects page</h1>
    <p>More soon</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects
