import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Verena Brodbeck`, `bonbonpages`, `react`, `gatsby`]} />
    <h1>Hi</h1>
    <p>
      This needs some text, I know.
    </p>
  </Layout>
)

export default IndexPage
