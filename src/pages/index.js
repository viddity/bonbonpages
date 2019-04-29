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
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to="/mixedpickles">Mixed Pickles</Link>
        {/* <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" to="/about">Blog</Link> */}
      </nav>
    </header>
    <div>
      <SEO title="Home" keywords={[`Verena Brodbeck`, `bonbonpages`, `react`, `gatsby`]} />
      <article className="athelas pa4 pb6">
        <p className="f6 f4-ns lh-copy measure center">
          Hi, welcome, I am Verena, a former Medical Doctor and Neuroscientist who discovered late in life, that programming is the thing she wants to do as her profession.<br/>
        I am a happy frontend developer now and none of the steps that led me there, would have happened without many
        </p>
        <blockquote className="ph0 f4 f1-ns measure-narrow center">
          <p className="fw9 lh-copy lh-title-ns">people, encourraging me.</p>
        </blockquote>
        <p className="f6 f4-ns lh-copy measure center">
        I was encouraged to not ignore my fling for programming, but to take it serious instead, to accept that a career switch at mid-thirty is not completely crazy and that I should trust my gut feeling's never ending song: ”This is what I want to do”. </p>
        <p className="f6 f4-ns lh-copy measure center">
          So here I am, a frontend developer, just about to start my third employment as such and still happy about the path my professional life took.
        </p>
        <p className="f6 f4-ns lh-copy measure center">
          I have told more details about this journey <Link className="link bg-animate hover-bg-light-green hover-white ph1 green dib" to="./about">here</Link>.
        </p>
      </article>
    </div>
    <Footer siteTitle={'bonbonPages'} />
  </>
)

export default IndexPage
