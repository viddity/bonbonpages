import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from './navigation'
import Me from '../images/staedlmaedl.jpg'

const Header = ({ siteTitle }) => (
  <header className="w-100 bg-white black-80 avenir bb b--black-10">
    <div className="flex flex-column flex-row-ns justify-between-ns items-end">
      <div className="flex items-center">
        <div className="w-25 mw5-ns pa1">
          <img className="br-100 pa1 ba b--black-10 w-100 h-100 wm3"
            src={Me}
            alt="Avatar"
          />
        </div>
        <div className="pa1 dim">
          <h1 className="mt2 mb0 fw2 f4 ph1 pv0">
            <Link
              to="/"
              style={{
                textDecoration: `none`
              }}
            >
              Verena Brodbeck
            </Link>
          </h1>
          <h2 className="f6 gray fw2 ttu tracked ph1 pv0">{siteTitle}</h2>
        </div>
      </div>
      <Navigation/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
