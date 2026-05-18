import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"
import ContactCTA from "../sections/ContactCTA"
import Benefits from "../sections/Benefits"

import {
  Search,
  Lightbulb,
  Wrench,
  Rocket,
} from "lucide-react"

const steps = [
  {
    title: "Audit & Discovery",
    description:
      "We analyze your workflows, bottlenecks, systems and operational inefficiencies to identify the highest leverage opportunities.",
    icon: Search,
    number: "01",
  },
  {
    title: "Strategy & Architecture",
    description:
      "We design scalable automation infrastructure, map integrations and engineer a production-ready system architecture.",
    icon: Lightbulb,
    number: "02",
  },
  {
    title: "Build & Integration",
    description:
      "Our team develops, integrates and deploys your automations, AI systems and operational workflows end-to-end.",
    icon: Wrench,
    number: "03",
  },
  {
    title: "Optimization & Scale",
    description:
      "We continuously refine systems, improve efficiency and scale performance as your business grows.",
    icon: Rocket,
    number: "04",
  },
]

export default function Process() {
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
          <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">

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

            <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/50 backdrop-blur-xl">

                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

                Process

              </div>

              {/* Heading */}
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">

                <span className="bg-gradient-to-b from-white to-violet-300 bg-clip-text text-transparent">

                  A Clear Path From
                  <br />
                  Chaos To Compounding Systems

                </span>

              </h1>

              {/* Paragraph */}
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg">

                Audit. Strategy. Build. Optimize.
                A repeatable engagement model designed
                for production outcomes.

              </p>

            </div>

          </section>

          {/* PROCESS STEPS */}
          <section className="pb-28">

            <div className="mx-auto max-w-6xl px-5 sm:px-8">

              <div className="grid gap-6 md:grid-cols-2">

                {steps.map((step, index) => (

                  <div
                    key={index}
                    className="
                      group relative overflow-hidden
                      rounded-3xl
                      border border-white/[0.08]
                      bg-white/[0.03]
                      p-8
                      backdrop-blur-xl
                      transition-all duration-200
                      hover:-translate-y-1
                      hover:border-violet-500/30
                      hover:bg-white/[0.04]
                      hover:shadow-[0_0_60px_rgba(139,92,246,0.10)]
                    "
                  >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-violet-500/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">

                      {/* Top */}
                      <div className="flex items-center justify-between">

                        {/* Icon */}
                        <div
                          className="
                            flex h-14 w-14 items-center justify-center
                            rounded-2xl
                            border border-violet-500/20
                            bg-violet-500/10
                            text-violet-300
                          "
                        >

                          <step.icon className="h-6 w-6" />

                        </div>

                        {/* Number */}
                        <div className="text-sm font-medium tracking-[0.2em] text-violet-400/70">

                          {step.number}

                        </div>

                      </div>

                      {/* Title */}
                      <h3 className="mt-6 text-2xl font-semibold text-white">

                        {step.title}

                      </h3>

                      {/* Description */}
                      <p className="mt-4 text-sm leading-relaxed text-white/45 sm:text-base">

                        {step.description}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>

          {/* Benefits */}
          <Benefits />

          {/* CTA */}
          <ContactCTA />

        </main>

        <Footer />

      </div>

    </div>
  )
}