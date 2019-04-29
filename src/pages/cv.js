import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <article className="cf ph2 ph4-ns pv3 pv5-ns">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="f3 lh-title fw9 mb0 mb3-ns mt0 pt3 bt bw2">
          Employments
        </h1>
        <h2 className="f4 mid-gray lh-title">
          as Frontend developer
        </h2>
        <time className="f6 ttu tracked gray">2014-2019</time>
      </header>
      <div className="fn fl-ns w-50-ns">
        <b>since 2019-05</b>
        <p className="f5 lh-copy measure mt0-ns">
          Senior Frontend Developer at <a className="dib link mid-gray dim" href="https://ioki.com">ioki GmbH</a>, Frankfurt
        </p>
        <b>2017-10 - 2019-04</b>
        <p className="f5 lh-copy measure mt0-ns">
          Frontend Developer at <a className="dib link mid-gray dim" href="https://fastbill.com">FastBill GmbH</a>, Frankfurt
        </p>
        <b>2016-06 – 2017-08</b>
        <p className="f5 lh-copy measure mt0-ns">
          Frontend Developer & Team Lead at <a className="dib link mid-gray dim" href="https://vaamo.de">vaamo Finanz AG</a>, Frankfurt
        </p>
        <b>2014-01 - 2016-05</b>
        <p className="f5 lh-copy measure mt0-ns">
          Junior Frontend Developer at <a className="dib link mid-gray dim" href="https://vaamo.de">vaamo Finanz AG</a>, Frankfurt
        </p>
      </div>
    </article>

    <article className="cf ph2 ph4-ns pb3 pb5-ns">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="f3 lh-title fw9 mb0 mb3-ns mt0 pt3 bt bw2">
           Skills
        </h1>
        <h2 className="f4 mid-gray lh-title">
          as Frontend developer
        </h2>
      </header>
      <div className="fn fl-ns w-50-ns"> 
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellspacing="0">
            <thead>
              <tr>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Programming</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr>
                <td className="pv1 pr3 bb b--black-20">HTML + CSS</td>
                <td className="pv1 pr3 bb b--black-20 tr">6 yrs</td>
              </tr>
              <tr>
                <td className="pv1 pr3 bb b--black-20">CSS Preprocessors</td>
                <td className="pv1 pr3 bb b--black-20 tr">5 yrs</td>
              </tr>
              <tr>
                <td className="pv1 pr3 bb b--black-20">JavaScript</td>
                <td className="pv1 pr3 bb b--black-20 tr">5 yrs</td>
              </tr>
              <tr>
                <td className="pv1 pr3 bb b--black-20">React/Redux</td>
                <td className="pv1 pr3 bb b--black-20 tr">1 yr</td>
              </tr>
              <tr>
                <td className="pv1 pr3 bb b--black-20">VueJs/Vuex</td>
                <td className="pv1 pr3 bb b--black-20 tr">1.5 yrs</td>
              </tr>
              <tr>
                <td className="pv1 pr3 bb b--black-20">RoR, PHP, Python</td>
                <td className="pv1 pr3 bb b--black-20 tr">Basics</td>
              </tr>
            </tbody>
          </table>
          <table className="f6 w-100 mw8 center" cellspacing="0">
            <thead>
              <tr>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Other</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr>
                <td className="pv1 pr3 bb b--black-20">Git</td>
                <td className="pv1 pr3 bb b--black-20 tr">5 yrs</td>
              </tr>
              <tr>
                <td className="pv1 pr3 bb b--black-20">Continuous Integration / Delivery</td>
                <td className="pv1 pr3 bb b--black-20 tr">5 yrs</td>
              </tr>
              <tr>
                <td className="pv1 pr3 bb b--black-20">Agile Development, Scrum-Team</td>
                <td className="pv1 pr3 bb b--black-20 tr">5 yrs</td>
              </tr>
              <tr>
                <td className="pv1 pr3 bb b--black-20">REST, JSON, HTTP-APIs</td>
                <td className="pv1 pr3 bb b--black-20 tr">4 yr</td>
              </tr>
              <tr>
                <td className="pv1 pr3 bb b--black-20">Test Driven Development</td>
                <td className="pv1 pr3 bb b--black-20 tr">3 yrs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>


    <article className="cf ph2 ph4-ns pv3 pv5-ns">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="f3 lh-title fw9 mb0 mb3-ns mt0 pt3 bt bw2">
          Career Switch
        </h1>
        <h2 className="f4 mid-gray lh-title">
          From medicine to coding
        </h2>
        <time className="f6 ttu tracked gray">2010 - 2014</time>
      </header>
      <div className="fn fl-ns w-50-ns">
        <b>Starting 2014</b>
        <p className="f5 lh-copy measure mt0-ns">
          Active community organizer<br/>
          Co-founder of non-profit organization Techettes e.V. www.techettes-frankfurt.com<br/>
          Hosting regular meetups, talks, workshops by and for women working/interested in tech.
        </p>
        <b>2013 - 2016</b>
        <p className="f5 lh-copy measure mt0-ns">
          Co-organizer of Rails Girls workshops Frankfurt
        </p>
        <b>2012</b>
        <p className="f5 lh-copy measure mt0-ns">
          Participation Rails Girls workshop, Munich
        </p>
        <b>Starting 2012</b>
        <p className="f5 lh-copy measure mt0-ns">
          Freelancing, CMS based website projects (WordPress, Typo3, Drupal, Joomla)<br/>
          Continued self-education in JavaScript, Ruby/Rail, Python, PHP
        </p>
        <b>from 2010 on</b>
        <p className="f5 lh-copy measure mt0-ns">
          Self-education in web technologies (Html, CSS, SASS, LESS, JavaScript, jQuery) via numerous online tutorials and workshops
        </p>
        <b>from 2005 on</b>
        <p className="f5 lh-copy measure mt0-ns">
          Programming in the form of data analysis as part of scientific work
        </p>
      </div>
    </article>

    <article className="cf ph2 ph4-ns pv3 pv5-ns">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="f3 lh-title fw9 mb0 mb3-ns mt0 pt3 bt bw2">
          Former life as MD / Neuroscientist
        </h1>
        <h2 className="f4 mid-gray lh-title">
          Education and Employments
        </h2>
        <time className="f6 ttu tracked gray">2004 - 2014</time>
      </header>
      <div className="fn fl-ns w-50-ns">
        <b>2009-08 - 2013-12</b>
        <p className="f5 lh-copy measure mt0-ns">
          Medical Doctor & Research Scientist<br/>
          Neurology, University Clinics Frankfurt
        </p>
        <b>2006-08 - 2009-07</b>
        <p className="f5 lh-copy measure mt0-ns">
          Research Scientist<br/>
          Functional Brainmapping Lab, University of Geneva, Switzerland 
        </p>
        <b>2004-10 - 2005-02</b>
        <p className="f5 lh-copy measure mt0-ns">
          Research Internship, Berenson-Allen Center for<br/>
          Non-Invasive Brain Stimulation, Boston MA, USA
        </p>
        <b>2003-08 - 2006-07</b>
        <p className="f5 lh-copy measure mt0-ns">
          Medical Doctor, pediatrics/neuropediatrics department,<br/>
          Hauner's Childrens Hospital, LMU Munich
        </p>
        <b>2003-01 - 2003-07</b>
        <p className="f5 lh-copy measure mt0-ns">
          Medical Doctor, pediatric surgery department<br/>
          Zentralklinikum Augsburg
        </p>
        <b>2002</b>
        <p className="f5 lh-copy measure mt0-ns">
          Doctorate in medicine
        </p>
        <b>1995 - 2002</b>
        <p className="f5 lh-copy measure mt0-ns">
          Human medicine studies<br/>
          Johannes Gutenberg University, Mainz
        </p>
      </div>
    </article>
  </Layout>
)

export default SecondPage
