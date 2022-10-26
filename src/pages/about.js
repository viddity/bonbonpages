import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="fl pa3 pa4-ns bg-white black-70 measure f4 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f3 fw7 ttu tracked lh-title mt0 mb3 avenir">About me</h3>
      </header>
      <section className="pt5 pb4">
        <p className="times lh-copy w-100 f5 mt0">
          I hadn't had any contact to programming ever. As a neuroscientist, I performed most data analyses using Excel. I see the rolling eyes of every programing capable scientist
          who has had to do with such semi-pros and their extensive excel sheets.<br/>
          Some of my colleagues back then were programmers and from those I learned about tools such as MatLab and what data analysis really is, or can be. That programming is powerfull and fun.
          I wanted to learn how to do that myself and searched for MatLab courses online.
        </p>
        <p className="times lh-copy w-100 f5 mt0">
          But instead of learning MatLab I stumbled over some HTML and CSS courses and then there was no turning back.
        </p>
        <p className="times lh-copy w-100 f5 mt0">
          Over a period of some years which started around 2010 – and felt much like a rollercoaster ride – I learned the basics of web development and found my first job as a junior frontend developer in 2014.
        </p>
        <p className="times lh-copy w-100 f5 mt0">
          Around 2012 – together with some admirable other women in tech – I started to organise meetups and workshops for beginners as a local chapter of the RailsGirls.<br></br>
          We later formed the "Techettes". <Link className="f6 f5-l link bg-animate black-80 bg-light-green hover-bg-light-blue dib ph1-l" to="/mixedpickles">Read more</Link>
        </p>
      </section>
    </div>
  </Layout>
)

export default SecondPage
