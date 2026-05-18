import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"
import Problem from "../sections/Problem"
import Benefits from "../sections/Benefits"
import FAQ from "../sections/FAQ"
import ContactCTA from "../sections/ContactCTA"

import {
  Star,
} from "lucide-react"

const companies = [
  "Northwind",
  "Acme Labs",
  "Lumen",
  "Vertex",
  "Quanta",
  "Polaris",
  "Helios",
  "Orbit",
]

const testimonials = [
  {
    quote:
      "Replaced 3 ops hires with one Exire build. Pipeline doubled in a quarter.",
    author: "Maya Chen",
    role: "COO, Northwind",
  },
  {
    quote:
      "Cleanest automation work we've seen. Zero hand-holding required.",
    author: "Daniel Reyes",
    role: "Founder, Lumen",
  },
  {
    quote:
      "Our team got their week back. Revenue is the side effect.",
    author: "Priya Shah",
    role: "VP RevOps, Vertex",
  },
]

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Global Grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03]">

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* Seamless Global Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-200px] h-[1400px] w-[1400px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[220px]" />

      </div>

      <div className="relative z-10">

        <Navbar />

        <main>

          {/* HERO */}
          <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">

            {/* Divider */}
            <div
              className="
                absolute bottom-0 left-0 right-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/[0.06]
                to-transparent
              "
            />

            <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/50 backdrop-blur-xl">

                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

                About

              </div>

              {/* Heading */}
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-7xl">

                <span className="bg-gradient-to-b from-white to-violet-300 bg-clip-text text-transparent">

                  Operators Building
                  <br />
                  Leverage For Operators

                </span>

              </h1>

              {/* Paragraph */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg">

                Exire is a senior team of engineers,
                AI specialists and ex-operators.
                We don't sell theory — we ship systems
                that compound.

              </p>

            </div>

          </section>

          {/* PROBLEM */}
          <Problem />

          {/* BENEFITS */}
          <Benefits />

          {/* SOCIAL PROOF */}
          <section className="relative py-20 sm:py-28">

            {/* Divider */}
            <div
              className="
                absolute top-0 left-0 right-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/[0.06]
                to-transparent
              "
            />

            <div className="mx-auto max-w-7xl px-5 sm:px-8">

              {/* Companies */}
              <p className="text-center text-xs uppercase tracking-[0.2em] text-white/35">

                Trusted by operators at high-growth companies

              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-4 lg:grid-cols-8">

                {companies.map((company, index) => (

                  <div
                    key={index}
                    className="text-center text-sm font-medium tracking-tight text-white/40"
                  >

                    {company}

                  </div>

                ))}

              </div>

              {/* Testimonials */}
              <div className="mt-14 grid gap-4 md:grid-cols-3">

                {testimonials.map((item, index) => (

                  <div
                    key={index}
                    className="
                      rounded-2xl
                      border border-white/[0.08]
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-xl
                      transition-all duration-200
                      hover:-translate-y-1
                      hover:border-violet-500/20
                    "
                  >

                    {/* Stars */}
                    <div className="flex gap-1 text-violet-400">

                      {[...Array(5)].map((_, i) => (

                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-current"
                        />

                      ))}

                    </div>

                    {/* Quote */}
                    <p className="mt-4 text-sm leading-relaxed text-white/85">

                      "{item.quote}"

                    </p>

                    {/* Author */}
                    <div className="mt-5 text-xs text-white/35">

                      {item.author} — {item.role}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>

          {/* FAQ */}
          <FAQ />

          {/* CTA */}
          <ContactCTA />

        </main>

        <Footer />

      </div>

    </div>
  )
}