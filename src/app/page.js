import Image from 'next/image'
import Example from './sections/headpage'
import About from './sections/about'
import Timeline from './sections/timeline'
import Contact from './sections/contact'
import Prizes from './sections/prizes'
import Sponsors from './sections/sponsors'
import Faq from './sections/faq'
import Footer from './sections/footer'
import Nav from './components/navbar'

export default function Home() {
  return (
  <div className='mx-auto'>
  <Nav />
  <Example />
  <About />
  <Timeline />
  <Contact />
  <Prizes />

  <Sponsors />
  <Faq />
  <Footer />
  
  
    </div>
  )
}
