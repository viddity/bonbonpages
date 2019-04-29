import { Link } from "gatsby"
import React from "react"

const Navigation = () => (
  <nav className="db fr dtc-l v-mid w-100 w-75-l tc tr-ns tr-l bt b--black-10 bn-ns">
    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/about">About</Link>
    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to="/mixedpickles">Mixed Pickles</Link>
    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" to="/about">Blog</Link>
    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa3 ph4-l" to="/cv">CV</Link>
  </nav>
)

export default Navigation
