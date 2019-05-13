import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Techettes from "../images/techettes.png"
// import Music from "../images/music.jpg"
// import Ginger from "../images/ginger.jpg"

const MixedPickles = () => (
  <Layout>
    <SEO title="Mixed Pickles" />
    <div className="fl pa3 pa3-ns bg-white black-70 measure f4 times">
      <header className="bb b--black-70 pv2 pv4-ns mb5">
        <h3 className="f3 fw7 ttu tracked lh-title mt0 mb3 avenir">Stuff I care about</h3>
      </header>
      <section className="pb4">
        <div class="dt mw12 center pt0 pb3 pv2-m pv3-ns">
          <div class="db dtc-ns v-mid-ns">
            <img src={Techettes} alt="Techettes Logo" class="w-100 mw4 w4-ns" />
          </div>
          <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
            <h2 className="f6 mt5 mt0-ns fw3 ttu tracked lh-title mt0 mb3">Techettes e.V.</h2>
            <p className="times lh-copy w-100 f5 mt0">
              The <a className="link bg-animate hover-bg-light-green hover-white ph1 green dib" target="blank" href="http://techettes-frankfurt.com">Techettes</a> are a non-profit "Verein", that five other tech enthusiastic women and me brought to life.
              We all share the admiration for tech topics and think it's a pitty that women – amongst other groups – are still so scarce in the industry.<br/>
              We organize meet-ups, talks, workshops, networking evenings in and around Frankfurt a.M..
            </p>
          </div>
        </div>
      </section>
      <div className="fl pa3 pa3-ns bg-white black-70 measure f4 times">
        <header className="bb b--black-70 pv2 pv4-ns mb5">
          <h3 className="f3 fw7 ttu tracked lh-title mt0 mb3 avenir">Talks</h3>
        </header>
        <section className="pb4">
          <h2 className="f6 fw3 ttu tracked lh-title mt0 mb3 baskerville">DevDay Krakow 2016</h2>
          <div className="video">
            <iframe
              title="DevDay Krakow 2016"
              src="https://www.youtube.com/embed/ViJ8e1NRGWg?controls=0"
              frameborder="0"
              style={{
                width: `100%`,
                height: `auto`,
                minHeight: `200px`
              }}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowfullscreen>
            </iframe>
          </div>
          <h2 className="f6 fw3 ttu tracked lh-title mt0 mb3 baskerville">Web Montag Frankfurt 2013 (german)</h2>
          <div className="video">
            <iframe
              title="TWeb Montag Frankfurt 2013emp"
              src="https://player.vimeo.com/video/70137903"
              frameborder="0"
              style={{
                width: `100%`,
                height: `auto`,
                minHeight: `200px`
              }}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowfullscreen>
            </iframe>
          </div>
          <h2 className="f6 fw3 ttu tracked lh-title mt0 mb3 baskerville">Webinale Berlin 2014 (german)</h2>
          <div className="video">
            <iframe
              title="Webinale Berlin 2014"
              src="https://www.youtube.com/embed/-FXcxCkyfAw?controls=0"
              frameborder="0"
              style={{
                width: `100%`,
                height: `auto`,
                minHeight: `200px`
              }}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowfullscreen>
            </iframe>
          </div>
        </section>
      </div>
      {/* <section className="pb4">
        <div class="dt mw12 center pt0 pb3 pv2-m pv3-ns">
          <div class="db dtc-ns v-mid-ns">
            <img src={Music} alt="Music" class="w-100 mw4 w4-ns" />
          </div>
          <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
            <h2 className="f6 mt5 mt0-ns fw3 ttu tracked lh-title mt0 mb3">Music</h2>
            <p class="lh-copy mw6-ns">
              What's there to say. I love music. Point out.<br/>
              Besides all you music lover friends, I am using spotify and highly recommend ByteFM, a Hamburg based internet radio as good sources for new input.
              I'd probably give off the joy of programming in exchange for the ability to play an instrument perfectly. I so far don't unfortunately.
            </p>
          </div>
        </div>
      </section>
      <section className="pb4">
        <div class="dt mw12 center pt0 pb3 pv2-m pv3-ns">
          <div class="db dtc-ns v-mid-ns">
            <img src={Ginger} alt="Music" class="w-100 mw4 w4-ns" />
          </div>
          <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
            <h2 className="f6 mt5 mt0-ns fw3 ttu tracked lh-title mt0 mb3">Cooking</h2>
            <p class="lh-copy mw6-ns">
              Two friends, Alex and Lars, enlightened me when I was 25, that one can buy fresh herbs in shops and that people actually do that. Dried herbs were my level of magic until then. 
              Thanks to my then roomate and friend and excellent cook Doro, I learned a lot more.<br/>As in coding, I rather am a "recipe tell me what to do" type of cook. But some people have enjoyed the results so far.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  </Layout>
)

export default MixedPickles
