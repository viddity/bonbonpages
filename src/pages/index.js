import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Footer from "../components/footer"
import Me from '../images/staedlmaedl.jpg'

const IndexPage = () => (
  <>
    <header className="bg-white black-80 tc pv4 avenir">
      <span>
        <img className="br-100 pa1 ba b--black-10 h4 w4"
          src={Me}
          alt="Avatar"
        />
        <h1 className="mt2 mb0 fw2 f1">
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            Verena Brodbeck
          </Link>
        </h1>
        <h2 className="f6 gray fw2 ttu tracked">bonbonPages</h2>
      </span>
      <nav className="bt bb b--black-10 tc mw7 center mt4">
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/about">About</Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to="/projects">Projects</Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" to="/about">Blog</Link>
      </nav>
    </header>
    <div>
      <SEO title="Home" keywords={[`Verena Brodbeck`, `bonbonpages`, `react`, `gatsby`]} />
      <section className="w-90 center pa4">
        <h1>Hi</h1>
        <article className="baskerville">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, soluta. Officia doloribus quo fugit, dolore id excepturi maiores! Odio, eveniet. Atque laborum deleniti magni similique explicabo itaque repudiandae debitis tenetur!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, soluta. Officia doloribus quo fugit, dolore id excepturi maiores! Odio, eveniet. Atque laborum deleniti magni similique explicabo itaque repudiandae debitis tenetur!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, soluta. Officia doloribus quo fugit, dolore id excepturi maiores! Odio, eveniet. Atque laborum deleniti magni similique explicabo itaque repudiandae debitis tenetur!
        </article>
      </section>
    </div>
    <Footer siteTitle={'bonbonPages'} />
  </>
)

export default IndexPage
