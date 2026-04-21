import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Tools from './components/Tools'
import Clients from './components/Clients'
import Stack from './components/Stack'
import CTA from './components/CTA'
import Footer from './components/Footer'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import TrustSignals from './components/TrustSignals'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <TrustSignals />
        <Tools />
        <Services />
        <Testimonials />
        <Clients />
        <Stack />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
