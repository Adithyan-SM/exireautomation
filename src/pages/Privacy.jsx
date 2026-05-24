import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

export default function Privacy() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <main className="mx-auto max-w-4xl px-5 pt-32 pb-24">

        <h1 className="text-4xl font-semibold">

          Privacy Policy

        </h1>

        <p className="mt-6 text-white/60 leading-relaxed">

          Last updated: May 24, 2026 

        </p>

        <p className="mt-6 text-white/60 leading-relaxed">

          Exire Automation respects your privacy.
          Any information submitted through this
          website including contact forms, emails,
          and booking forms is used solely for
          communication and service delivery.

        </p>

        <p className="mt-6 text-white/60 leading-relaxed">

          We do not sell, rent, or share your
          personal information with third parties.

        </p>

        <p className="mt-6 text-white/60 leading-relaxed">

          By using this website, you agree to the
          collection and use of information in
          accordance with this policy.

        </p>

      </main>

      <Footer />

    </div>
  )
}