import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from './navigation'
import Me from '../images/staedlmaedl.jpg'

const Header = ({ siteTitle }) => (
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
      <h2 className="f6 gray fw2 ttu tracked">{siteTitle}</h2>
    </span>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
