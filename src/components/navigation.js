import { Link } from "gatsby"
import React from "react"

const styleLink = {
  color: `white`,
  margin: `0 5px`,
  textDecoration: `none`
}

const Navigation = () => (
  <nav 
    style={{
      display: `flex`
    }}
  >
    <Link style={styleLink} to="/about/">About</Link>
    <Link style={styleLink} to="/projects/">Projects</Link>
    <Link style={styleLink} to="/blog/">Blog</Link>
  </nav>
)

export default Navigation
