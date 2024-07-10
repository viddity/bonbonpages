import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      position: `fixed`,
      bottom: 0
    }}
    className="bg-white w-100 ph1 pv1 pv2-ns mt2 mid-gray avenir bt b--black-10"
  >
    <div className="tc">
      <Link to="/contact" className="f7 dib ph2 link mid-gray dim">Contact</Link>
    </div>
  </footer>
)

export default Footer
