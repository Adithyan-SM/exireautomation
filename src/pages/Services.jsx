import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"
import ContactCTA from "../sections/ContactCTA"

import {
  Bot,
  Workflow,
  Globe,
  Database,
  Sparkles,
  MessageSquare,
  Target,
  Cpu,
} from "lucide-react"

const services = [
  {
    title: "AI Automation",
    description:
      "Custom automation systems that eliminate repetitive operational work.",
    icon: Sparkles,
  },
  {
    title: "Lead Generation",
    description:
      "Outbound systems engineered to generate qualified pipeline consistently.",
    icon: Target,
  },
  {
    title: "CRM Systems",
    description:
      "Unified CRM infrastructure with automated routing and follow-ups.",
    icon: Database,
  },
  {
    title: "AI Chatbots",
    description:
      "Conversational AI assistants trained for support, sales and onboarding.",
    icon: MessageSquare,
  },
  {
    title: "Workflow Automation",
    description:
      "Cross-platform automations connecting your entire operational stack.",
    icon: Workflow,
  },
  {
    title: "AI Agents",
    description:
      "Autonomous AI systems capable of handling business processes end-to-end.",
    icon: Bot,
  },
  {
    title: "Website Design",
    description:
      "High-converting modern websites built for speed, trust and conversions.",
    icon: Globe,
  },
  {
    title: "Internal Systems",
    description:
      "Custom dashboards and internal tools built for operational clarity.",
    icon: Cpu,
  },
]

export default function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Global Grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03]">

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      </div>

      <div className="relative z-10">

        <Navbar />

        <main>

          {/* HERO */}
          <section className="relative overflow-hidden pt-32 pb-20">

            <div className="mx-auto max-w-4xl px-5 text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/50 backdrop-blur-xl">

                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

                Services

              </div>

              {/* Heading */}
              <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl">

                <span className="bg-gradient-to-b from-white to-violet-300 bg-clip-text text-transparent">

                  Infrastructure For
                  <br />
                  AI-Native Companies

                </span>

              </h1>

              {/* Paragraph */}
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/45">

                Systems, automations and AI infrastructure
                engineered to scale operations without
                scaling headcount.

              </p>

            </div>

          </section>

          {/* SERVICES GRID */}
          <section className="pb-28">

            <div className="mx-auto max-w-7xl px-5 sm:px-8">

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {services.map((service, index) => (

                  <div
                    key={index}
                    className="
                      group relative overflow-hidden
                      rounded-2xl
                      border border-white/[0.08]
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-xl
                      transition-all duration-200
                      hover:-translate-y-1
                      hover:border-violet-500/30
                      hover:bg-white/[0.045]
                      hover:shadow-[0_0_60px_rgba(139,92,246,0.12)]
                    "
                  >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-violet-500/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">

                      {/* Icon Box */}
                      <div
                        className="
                          flex h-11 w-11 items-center justify-center
                          rounded-xl
                          border border-violet-500/20
                          bg-violet-500/10
                          text-violet-300
                        "
                      >

                        <service.icon className="h-5 w-5" />

                      </div>

                      {/* Title */}
                      <h3 className="mt-5 text-lg font-semibold text-white">

                        {service.title}

                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-relaxed text-white/45">

                        {service.description}

                      </p>

                      {/* CTA */}
                      <button
                        className="
                          mt-5 text-sm text-violet-300
                          transition-all duration-200
                          group-hover:translate-x-1
                        "
                      >

                        Learn more →

                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>

          {/* CTA */}
          <ContactCTA />

        </main>

        <Footer />

      </div>

    </div>
  )
}