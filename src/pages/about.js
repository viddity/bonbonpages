import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the about page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum dolorem illum placeat officiis assumenda et! Dolore iusto rem esse molestias. Unde quasi nemo, mollitia beatae dolore nesciunt illo nulla?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum dolorem illum placeat officiis assumenda et! Dolore iusto rem esse molestias. Unde quasi nemo, mollitia beatae dolore nesciunt illo nulla?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum dolorem illum placeat officiis assumenda et! Dolore iusto rem esse molestias. Unde quasi nemo, mollitia beatae dolore nesciunt illo nulla?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum dolorem illum placeat officiis assumenda et! Dolore iusto rem esse molestias. Unde quasi nemo, mollitia beatae dolore nesciunt illo nulla?</p>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
