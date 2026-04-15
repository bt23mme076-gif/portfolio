import Cursor   from './components/Cursor'
import Nav      from './components/Nav'
import Hero     from './components/Hero'
import Marquee  from './components/Marquee'
import Tools    from './components/Tools'
import Clients  from './components/Clients'
import Stack    from './components/Stack'
import CTA      from './components/CTA'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Tools />
        <Clients />
        <Stack />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
