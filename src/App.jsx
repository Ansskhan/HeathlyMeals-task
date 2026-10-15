import Navbar from './components/sections/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import StatsBar from './components/sections/StatsBar.jsx'
import About from './components/sections/About.jsx'
import Services from './components/sections/Services.jsx'
import Advantages from './components/sections/Advantages.jsx'
import Plans from './components/sections/Plans.jsx'
import Steps from './components/sections/Steps.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import FAQ from './components/sections/FAQ.jsx'
import CTA from './components/sections/CTA.jsx'
import Footer from './components/sections/Footer.jsx'
import WhatsAppFloat from './components/common/WhatsAppFloat.jsx'

/**
 * Healthify landing page — composed from section components
 * mirroring the reference design top to bottom.
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Advantages />
        <Plans />
        <Steps />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
