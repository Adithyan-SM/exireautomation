import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"
import Testimonials from "../sections/Testimonials"
import ContactCTA from "../sections/ContactCTA"

import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    category: "B2B SaaS",
    title: "Outbound engine that books 38 demos/mo",
    stats: [
      {
        value: "+312%",
        label: "Pipeline",
      },
      {
        value: "−41%",
        label: "CAC",
      },
      {
        value: "180/mo",
        label: "Hours saved",
      },
    ],
  },
  {
    category: "Agency",
    title: "AI-run client reporting & onboarding",
    stats: [
      {
        value: "+27%",
        label: "Retention",
      },
      {
        value: "+19%",
        label: "Margin",
      },
      {
        value: "−72%",
        label: "Manual ops",
      },
    ],
  },
  {
    category: "E-commerce",
    title: "24/7 support + churn-saver agent",
    stats: [
      {
        value: "4.9/5",
        label: "CSAT",
      },
      {
        value: "−34%",
        label: "Refunds",
      },
      {
        value: "+22%",
        label: "LTV",
      },
    ],
  },
]

export default function CaseStudies() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03]">

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      </div>

      <div className="relative z-10">

        <Navbar />

        <main>

          {/* HERO */}
          <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20">

            <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/50 backdrop-blur-xl">

                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

                Case Studies

              </div>

              {/* Heading */}
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">

                <span className="bg-gradient-to-b from-white to-violet-300 bg-clip-text text-transparent">

                  Real Systems.
                  <br />
                  Measured Results.

                </span>

              </h1>

              {/* Paragraph */}
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg">

                A look at the AI infrastructure we've built —
                and the outcomes our clients ship.

              </p>

            </div>

          </section>

          {/* CASE STUDIES */}
          <section className="pb-24">

            <div className="mx-auto max-w-7xl px-5 sm:px-8">

              <div className="grid gap-5 md:grid-cols-3">

                {caseStudies.map((item, index) => (

                  <div
                    key={index}
                    className="
                      group relative overflow-hidden
                      rounded-3xl
                      border border-white/[0.08]
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-xl
                      transition-all duration-200
                      hover:-translate-y-1
                      hover:border-violet-500/30
                      hover:bg-white/[0.045]
                      hover:shadow-[0_0_60px_rgba(139,92,246,0.10)]
                    "
                  >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-violet-500/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">

                      {/* Category */}
                      <div className="text-xs uppercase tracking-[0.2em] text-violet-400">

                        {item.category}

                      </div>

                      {/* Title */}
                      <h3 className="mt-4 text-xl font-semibold leading-snug text-white">

                        {item.title}

                      </h3>

                      {/* Stats */}
                      <div className="mt-7 grid grid-cols-3 gap-3">

                        {item.stats.map((stat, i) => (

                          <div
                            key={i}
                            className="
                              rounded-xl
                              border border-white/[0.08]
                              bg-black/20
                              p-3 text-center
                            "
                          >

                            <div className="text-base font-semibold text-white">

                              {stat.value}

                            </div>

                            <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/35">

                              {stat.label}

                            </div>

                          </div>

                        ))}

                      </div>

                      {/* CTA */}
                      <button
                        className="
                          mt-7 inline-flex items-center gap-1.5
                          text-sm text-violet-300
                          transition-all duration-200
                          group-hover:translate-x-1
                        "
                      >

                        Read full case

                        <ArrowRight className="h-4 w-4" />

                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>

          {/* Testimonials */}
          <Testimonials />

          {/* CTA */}
          <ContactCTA />

        </main>

        <Footer />

      </div>

    </div>
  )
}