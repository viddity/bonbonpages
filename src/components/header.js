import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from './navigation'

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: `flex`,
      height: `4rem`,
      background: `#3B8EA5`,
      justifyContent: `space-between`,
      alignItems: `center`,
      marginBottom: `1.45rem`,
      padding: `0 1rem`,
    }}
  >
    <div>
      <h1 style={{
          margin: 0,
          padding: 0
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
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
