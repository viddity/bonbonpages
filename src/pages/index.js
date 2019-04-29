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
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to="/mixedpickles">Mixed Pickles</Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" to="/about">Blog</Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa3 ph4-l" to="/cv">CV</Link>
      </nav>
    </header>
    <div>
      <SEO title="Home" keywords={[`Verena Brodbeck`, `bonbonpages`, `react`, `gatsby`]} />
      <article className="athelas pa4">
        <h1 className="f4 f2-ns lh-copy measure center tc">Hi</h1>
        <p className="f6 f4-ns lh-copy measure center">
          The form of our letters, the older handwriting and inscriptions as much as
          the cuttings in use today, reflects a convention that has slowly solidified,
          an agreement hardened in many battles. Even after the Renaissance several
          European countries retained broken, blackletter national scripts in opposition to roman, the obligatory type for all Latin material; yet even today, I hope, the last word about Fraktur has not been spoken.
        </p>
        <blockquote className="ph0 f4 f1-ns measure-narrow center">
          <p className="fw9 lh-copy lh-title-ns">The punches of Claude Garamond, cut around 1530 in Paris, are simply unsurpassed in their clarity, readability and beauty.
          </p>
        </blockquote>
        <p className="f6 f4-ns lh-copy measure center">
          Apart from that, the roman minuscule has been our way of writing for hundreds
          of years. What followed were merely fashionable variations, here and there even
          deformations, of the noble basic form, but no improvement whatever. The
          punches of Claude Garamond, cut around 1530 in Paris, are simply unsurpassed in
          their clarity, readability and beauty. Garamond appeared on the scene at a
          time when the occidental book, as an object, cast off its medieval
          ponderousness and took up the form which today is still the best: the slender
          and upright rectangular body, comprising folded sheets stitched or sewn at
          the back, in a cover whose protruding edges protect the trimmed pages.
        </p>

      </article>


    </div>
    <Footer siteTitle={'bonbonPages'} />
  </>
)

export default IndexPage
