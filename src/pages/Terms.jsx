import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

export default function Terms() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <main className="mx-auto max-w-4xl px-5 pt-32 pb-24">

        <h1 className="text-4xl font-semibold">

          Terms & Conditions

        </h1>

        <p className="mt-6 text-white/60 leading-relaxed">

          Last updated: May 24, 2026

        </p>

        <p className="mt-6 text-white/60 leading-relaxed">

          By accessing this website, you agree to
          use it lawfully and respectfully.

        </p>

        <p className="mt-6 text-white/60 leading-relaxed">

          Exire Automation provides automation,
          consulting, and AI-related services.
          Results may vary depending on business
          implementation and operational factors.

        </p>

        <p className="mt-6 text-white/60 leading-relaxed">

          We reserve the right to update or modify
          these terms at any time without notice.

        </p>

      </main>

      <Footer />

    </div>
  )
}
