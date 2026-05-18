import Navbar from "../sections/Navbar"
import Hero from "../sections/Hero"
import Problem from "../sections/Problem"
import Benefits from "../sections/Benefits"
import Testimonials from "../sections/Testimonials"
import FAQ from "../sections/FAQ"
import ContactCTA from "../sections/ContactCTA"
import Footer from "../sections/Footer"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      <Navbar />

      <main>

        <Hero />

        <Problem />

        <Benefits />

        <Testimonials />

        <FAQ />

        <ContactCTA />

      </main>

      <Footer />

    </div>
  )
}