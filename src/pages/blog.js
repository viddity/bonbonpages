import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="bonbonpages Blog" />
    <h1>Hi from the Blog page</h1>
    <p>More soon</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
