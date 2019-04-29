import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="bonbonpages About" />
    <div className="fl pa3 pa4-ns bg-white black-70 measure f4 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f3 fw7 ttu tracked lh-title mt0 mb3 avenir">About me</h3>
        <h2 className="f6 fw3 ttu tracked lh-title mt0 mb3 baskerville">This is very much work in progress</h2>
      </header>
      <section className="pt5 pb4">
        <p className="times lh-copy w-100 f5 mt0">
          It all started when I learned that programming is creativity and power.
          I hadn't had any contact to programming ever. As a neuroscientist, I performed data analyses with Excel. Yes I can see the rolling eyes, of every programing capable scientist
          who has had to do with such semi-pros and ther extensive excel sheets.<br/>
          I had programmers as colleagues back then, and from those I learned, that with tools such as MatLab, data analysis is so much easier, powerfull and fun.
          I wanted to learn how to do that as well.
          But instead of learning MatLab I stumbled over some online courses for HTML and CSS and then there was no turning back.
        </p>
        <p className="times lh-copy w-100 f5 mt0">
          Over a period of some years which started around 2010 – and felt much like a rollercoaster ride – I have taught myself the basic skills of webdevelopment and found my first job as a frontend developer in 2014.
        </p>
      </section>
    </div>
  </Layout>
)

export default SecondPage
