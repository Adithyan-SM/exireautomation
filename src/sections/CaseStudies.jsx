import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

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
    <section
      id="case-studies"
      className="relative py-20 sm:py-28"
    >

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      </div>

      {/* Grid */}
      <div>

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">

          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-white/[0.06]
              bg-white/[0.03]
              px-3 py-1
              text-xs text-white/45
              backdrop-blur-xl
            "
          >

            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            Case Studies

          </div>

          <h2
            className="
              mt-4
              text-3xl font-semibold
              leading-tight tracking-[-0.04em]
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >

            <span className="bg-gradient-to-b from-white to-violet-300 bg-clip-text text-transparent">

              Real systems.
              <br />
              Measured results.

            </span>

          </h2>

        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">

          {caseStudies.map((study, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              className="
                group
                rounded-2xl
                border border-white/[0.06]
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:border-violet-500/20
                hover:bg-white/[0.04]
                hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]
              "
            >

              {/* Category */}
              <div className="text-[10px] uppercase tracking-[0.2em] text-violet-400">

                {study.category}

              </div>

              {/* Title */}
              <h3 className="mt-3 text-lg font-semibold leading-snug text-white">

                {study.title}

              </h3>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">

                {study.stats.map((stat, statIndex) => (

                  <div
                    key={statIndex}
                    className="
                      rounded-lg
                      border border-white/[0.06]
                      bg-black/30
                      p-3 text-center
                    "
                  >

                    <div className="text-base font-semibold text-white">

                      {stat.value}

                    </div>

                    <div className="mt-1 text-[10px] uppercase tracking-wider text-white/40">

                      {stat.label}

                    </div>

                  </div>

                ))}

              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="
                  mt-6 inline-flex items-center gap-1.5
                  text-xs text-violet-400
                  transition-all duration-300
                  group-hover:gap-2
                "
              >

                Read full case

                <ArrowRight className="h-3.5 w-3.5" />

              </a>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}