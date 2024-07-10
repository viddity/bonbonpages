import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Footer from "../components/footer"
import Me from '../images/staedlmaedl.jpg'

import "../styles/main.scss"

const IndexPage = () => (
  <>
    <header className="bg-white black-80 tc pv4 avenir">
      <span>
        <img className="br-100 pa1 ba b--black-10 h4 w4"
          src={Me}
          alt="Avatar"
        />
        <h1 className="mt2 mb0 fw2 f1">Verena Brodbeck</h1>
        <h2 className="f6 gray fw2 ttu tracked">bonbonPages</h2>
      </span>
      <nav className="bt bb b--black-10 tc mw7 center mt4">
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/about">About</Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa3 ph4-l" to="/cv">CV</Link>
      </nav>
    </header>
    <div>
      <SEO title="Home" keywords={[`Verena Brodbeck`, `bonbonpages`, `react`, `gatsby`]} />
      <article className="athelas pa4 pb6">
      <blockquote className="ph0 f4 f2-ns measure-narrow center">
          <p className="fw9 lh-copy lh-title-ns">Welcome,</p>
        </blockquote>
        <p className="f6 f5-ns lh-copy measure center">
          I am Verena, a former medical doctor and neuroscientist who discovered late in life that programming is what
          I want to do as my profession.
        </p>
        <p className="f6 f5-ns lh-copy measure center">
          I have been working as a Software Developer since 2014, primarily with React Native in recent years.<br/>
          Find details about my technical skills in my <Link className="f6 f5-l link bg-animate black-80 bg-light-green hover-bg-light-red dib ph1-l" to="/cv">CV</Link>.
        </p>
      </article>
    </div>
    <Footer siteTitle={'bonbonPages'} />
  </>
)

export default IndexPage
