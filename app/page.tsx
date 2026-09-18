
import Navbar from "./components/Navbar"
import Hero from "./components/Hero" 
import StepCard from "./components/StepCard"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function LandingPage () {
  return (
  <div className="relative min-h-screen overflow-hidden bg-slate-50">

    <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-teal-300 blur-3xl"></div>

    <div className="pointer-events-none absolute top-14 -right-32 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-teal-300 blur-3xl"></div>
    <Navbar />

    <main>
      <Hero />

      <StepCard />

      <CTA />
    </main>

    <Footer />

  </div>
)
}