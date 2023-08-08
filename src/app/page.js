import Image from 'next/image'
import Example from './sections/headpage'
import About from './sections/about'
import Timeline from './sections/timeline'
import Contact from './sections/contact'
import Prizes from './sections/prizes'
import Sponsors from './sections/sponsors'
import Faq from './sections/faq'
import Footer from './sections/footer'

export default function Home() {
  return (
  <>
  <Example />
  <About />
  <Timeline />
  <Contact />
  <Prizes />
  <Sponsors />
  <Faq />
  <Footer />
  
  
    </>
  )
}
