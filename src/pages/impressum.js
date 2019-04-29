import React from "react"

import Layout from "../components/layout"
import Fuerte from "../images/fuerte.jpg"
import SEO from "../components/seo"

const Impressum = () => (
  <Layout>
    <SEO title="bonbonpages Impressum" />
    <div className="cf" style={{
      backgroundImage: `url(${Fuerte})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center center`,
      backgroundSize: `50% 100%`,
      paddingTop: `2rem`,
      minWidth: `90vw`
    }}>
      <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f4 times">
        <header className="bb b--black-70 pv4">
          <h3 className="f3 fw7 ttu tracked lh-title mt0 mb3 avenir">Impressum</h3>
        </header>
        <section className="pt5 pb4">
          <p className="times lh-copy measure f5 mt0">
            Verena Brodbeck<br/>Bottenhorner Weg 2<br/>60489 Frankfurt
          </p>
          <p className="times lh-copy measure f5 mt0">
            UstId: 012 808 42858<br/><a className="no-underline gray dim" href="mailto:kontakt@bonbonpages.de">Mail me</a>
          </p>
        </section>
      </div>
    </div>
  </Layout>
)

export default Impressum
