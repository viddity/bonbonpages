import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Techettes from "../images/techettes.png"
import Music from "../images/music.jpg"
import Ginger from "../images/ginger.jpg"

const MixedPickles = () => (
  <Layout>
    <SEO title="bonbonpages Mixed Pickles" />
    <div className="fl pa3 pa3-ns bg-white black-70 measure f4 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f3 fw7 ttu tracked lh-title mt0 mb3 avenir">Stuff I care about</h3>
      </header>
      <section className="pb4">
        <div class="dt mw12 center pt0 pb3 pv2-m pv3-ns">
          <div class="db dtc-ns v-mid-ns">
            <img src={Techettes} alt="Techettes Logo" class="w-100 mw4 w4-ns" />
          </div>
          <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
            <h2 className="f6 mt5 mt0-ns fw3 ttu tracked lh-title mt0 mb3">Techettes e.V.</h2>
            <p class="lh-copy">
              The Techettes are a non-profit "Verein", that five other tech enthusiastic women and me brought to life.
              We all share the admiration for tech topics and think it's a pitty that women – amongst other groups – are still so scarce in the industry.<br/>
              We organize meet-ups, talks, workshops, networking evenings in and around Frankfurt a.M..
            </p>
          </div>
        </div>
      </section>
      <section className="pb4">
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
      </section>
    </div>
  </Layout>
)

export default MixedPickles
