import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Impressum = () => (
  <Layout>
    <SEO title="bonbonpages Impressum" />
    <div className="cf" style={{
      background: `url(http://mrmrs.github.io/photos/12.jpg) no-repeat center center fixed`,
      backgroundSize: `cover`,
    }}>
      <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
        <header className="bb b--black-70 pv4">
          <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Impressum</h3>
        </header>
        <section className="pt5 pb4">
          <p className="times lh-copy measure f4 mt0">
            Verena Brodbeck<br/>Bottenhorner Weg 2<br/>60489 Frankfurt
          </p>
          <p className="times lh-copy measure f4 mt0">
            UstId: <br/><a className="no-underline gray dim" href="mailto:kontakt@bonbonpages.de">Mail me</a>
          </p>
        </section>
      </div>

    </div>
  </Layout>
)

export default Impressum
