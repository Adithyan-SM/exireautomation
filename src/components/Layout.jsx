import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Global Grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03]">

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      </div>

      <div className="relative z-10">

        <Navbar />

        {children}

        <Footer />

      </div>

    </div>
  )
}