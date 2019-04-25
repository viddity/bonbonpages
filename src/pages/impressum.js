import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Impressum = () => (
  <Layout>
    <SEO title="bonbonpages Impressum" />
    <h1>Hi from the Impressum page</h1>
    <p>More soon</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Impressum
