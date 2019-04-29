import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="bonbonpages About" />
    <div className="fl pa3 pa4-ns bg-white black-70 measure f4 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f3 fw7 ttu tracked lh-title mt0 mb3 avenir">About me</h3>
      </header>
      <section className="pt5 pb4">
        <p className="times lh-copy measure f5 mt0">
        Verena entdeckte ihre Begeisterung fürs Coden relativ spät. Nach Medizinstudium und einigen klinischen Jahren, schlug sie eine wissenschaftliche Laufbahn ein, forschte an verschiedenen Orten zu den Themen Epilepsie, Schlafphysiologie und Synaesthesie. Dabei lernte sie, was man mit Datenanalyseskripten so alles machen kann und war von der Logik des Programmierens begeistert.
Mit Mitte 30 wurde sie noch vom Mediziner zum Coder. Die Faszination des Programmierens gepaart mit dem gestalterischen Aspekt des Webdesign ist für sie die perfekte Mischung.
Seit 2010 hat sie sich in Eigenregie zahlreiche Webcoding-Tools angeeignet und unter dem Namen bonbonpages verschiedene Webauftritte realisiert.
Das Coden ganz zur Profession zu machen, dafür war die eher zufällige Begegnung mit den Rails Girls entscheidend. 2012 nahm sie an einem Rails Girls Workshop in München teil und wurde vom mutmachenden Enthusiasmus der Initiative angesteckt. Gemeinsam mit Silvia und vielen anderen organisierte sie 2013 selbst den ersten Rails Girls Workshop in Frankfurt und lernte dabei auch Daniela und Svenja kennen.
Ende 2013 hängte sie das Arztsein endgültig an den Nagel und wurde Frontendentwicklerin bei vaamo, einem Finanz-Tech StartUp in Frankfurt. Nach fantastischen, lehrreichen 3 1/2 Jahren im VaamoTech-Team, der nächsten Station bei FastBill und dem Vergnügen mit einem tollen Team in VueJS einzusteigen, ist sie seit Mai 2019 Teil des Teams von ioki.

Wie wenig Frauen wissen was Coden ist, wie kreativ und spannend Programmieren sein kann, wurde ihr erst mit der eigenen Geschichte bewusst. Daran will sie mit den Techettes etwas ändern.
        </p>
      </section>
    </div>
  </Layout>
)

export default SecondPage
