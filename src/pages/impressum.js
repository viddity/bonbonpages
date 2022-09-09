import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Impressum = () => (
  <Layout>
    <SEO title="Impressum" />
    <div className="cf center">
      <div className="w4-n2 fl pa3 pa4-ns bg-white black-70 measure f4 times">
        <header className="bb b--black-70 pv4">
          <h3 className="f3 fw7 ttu tracked lh-title mt0 mb3 avenir">Impressum</h3>
        </header>
        <section className="pt5 pb4">
          <p className="times lh-copy measure f5 mt0">
            Verena Brodbeck<br/>Bottenhorner Weg 2<br/>60489 Frankfurt
          </p>
          <p className="times lh-copy measure f5 mt0">
            <a className="link bg-animate hover-bg-light-green hover-white green dib" href="mailto:kontakt@bonbonpages.de">kontakt@bonbonpages.de</a><br/>
            Twitter:<a className="link bg-animate hover-bg-light-blue hover-white ph1 blue dib" href="https://twitter.com/viddity">@viddity</a>
          </p>
        </section>
      </div>
    </div>
  </Layout>
)

export default Impressum
