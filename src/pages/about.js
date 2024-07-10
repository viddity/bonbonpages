import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="fl pa3 pa4-ns bg-white black-70 measure f4 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f3 fw7 ttu tracked lh-title mt0 mb3 avenir">How come?</h3>
      </header>
      <section className="pt5 pb4">
        <p className="times lh-copy w-100 f5 mt0">
          "Really? You were an MD/Neuroscientist and now you're a programmer?"<br/>
          I get that question a lot, as you might imagine. So, here’s the short version:
        </p>
        <p className="times lh-copy w-100 f5 mt0">
          I did not have any contact with programming until my mid-thirties.<br/>
          As a neuroscientist, I performed data analyses using Excel (yes, I can see the eye rolls
          from every programming-capable scientist who has ever had to deal with such semi-pros and their extensive Excel sheets...).<br/>
          Some of my colleagues back then were programmers, and from them, I learned about tools
          like MatLab and discovered that knowing how to program is creative, powerful, and fun.
          I wanted to learn it myself and searched for MatLab online courses. But instead of MatLab,
          I stumbled upon HTML, CSS, and JavaScript and simply caught fire.
          I knew pretty quickly that this was it! There was no turning back. That was around 2010.
        </p>
        <p className="times lh-copy w-100 f5 mt0">
          For several years, I continued to work in the medical field and academia while teaching myself (aka Googling)
          the basics of web development and JavaScript on the side, building a few websites for friends and family.
          The real step happened in 2014 when I found my first employment as a junior frontend developer.
        </p>
        <p className="times lh-copy w-100 f5 mt0">
          Now, with more than 10 years of experience in the industry, I can call myself a senior frontend developer.
          I still enjoy programming and have never regretted not finding that MatLab course first.
          The milestones of what sometimes felt like a rollercoaster ride can be found in my <Link className="f6 f5-l link bg-animate black-80 bg-light-green hover-bg-light-red dib ph1-l" to="/cv">CV</Link>.
        </p>
        <p className="times lh-copy w-100 f5 mt0">
          Around 2012, along with several other admirable women in tech, I started organizing meetups and workshops for beginners as a local chapter of RailsGirls.
          We later formed the group 'Techettes'. <Link className="f6 f5-l link bg-animate black-80 bg-light-green hover-bg-light-blue dib ph1-l" to="/mixedpickles">Read more here.</Link>
        </p>
      </section>
    </div>
  </Layout>
)

export default SecondPage
