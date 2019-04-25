import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="pv4 ph3 ph5-m ph6-l mid-gray avenir">
    <div className="tc mt3">
      <Link to="/" className="f6 dib ph2 link mid-gray dim">Impressum</Link>
      <a href="https://twitter.com/viddity" className="f6 dib ph2 link mid-gray dim">Twitter</a>
      <a href="https://www.instagram.com/viddity" className="f6 dib ph2 link mid-gray dim">Instagram</a>
    </div>
  </footer>
)

export default Footer
