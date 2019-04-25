import { Link } from "gatsby"
import React from "react"

const Navigation = () => (
  <nav class="bt bb tc mw7 center mt4">
    <Link class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/about">About</Link>
    <Link class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to="/projects">Projects</Link>
    <Link class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" to="/about">Blog</Link>
  </nav>
)

export default Navigation
