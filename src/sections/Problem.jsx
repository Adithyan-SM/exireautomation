import { CircleCheck } from "lucide-react"
import { motion } from "framer-motion"

const beforeItems = [
  "Missed leads in your inbox",
  "Repetitive manual tasks",
  "Slow follow-ups",
  "Disconnected tools",
  "Hiring to scale ops",
]

const afterItems = [
  "Every lead captured & routed",
  "Agents handle the busywork",
  "Instant, personalized follow-up",
  "One unified system",
  "Scale without headcount",
]

export default function Problem() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">

      {/* Seamless Divider */}
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">

          {/* Badge */}
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-white/[0.08]
              bg-white/[0.03]
              px-3 py-1
              text-xs text-white/45
              backdrop-blur-xl
            "
          >

            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            The Problem

          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-4xl font-semibold
              leading-[1.05]
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-6xl
            "
          >

            <span className="bg-gradient-to-b from-white to-violet-300 bg-clip-text text-transparent">

              Manual Operations
              <br />
              Are Slowing Your Growth

            </span>

          </h2>

          {/* Paragraph */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg">

            Most teams aren't short on opportunity —
            they're short on systems.
            Here's the difference automation makes.

          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 sm:gap-6">

          {/* BEFORE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            viewport={{
              once: true,
            }}
            className="
              group relative overflow-hidden
              rounded-3xl
              border border-white/[0.08]
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
              transition-all duration-200
              hover:-translate-y-1
              hover:border-white/[0.12]
              sm:p-8
            "
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-white/[0.015] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">

              {/* Label */}
              <div className="text-xs uppercase tracking-[0.2em] text-white/35">

                Before

              </div>

              {/* Title */}
              <h3 className="mt-3 text-2xl font-semibold text-white">

                Running on duct tape

              </h3>

              {/* List */}
              <ul className="mt-7 space-y-4">

                {beforeItems.map((item, index) => (

                  <li
                    key={index}
                    className="
                      flex items-start gap-3
                      text-sm leading-relaxed text-white/45
                      sm:text-base
                    "
                  >

                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/25" />

                    {item}

                  </li>

                ))}

              </ul>

            </div>

          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
              delay: 0.08,
            }}
            viewport={{
              once: true,
            }}
            className="
              group relative overflow-hidden
              rounded-3xl
              border border-violet-500/20
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
              transition-all duration-200
              hover:-translate-y-1
              hover:border-violet-500/35
              hover:shadow-[0_0_90px_rgba(139,92,246,0.14)]
              sm:p-8
            "
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-violet-500/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">

              {/* Label */}
              <div className="text-xs uppercase tracking-[0.2em] text-violet-400">

                After Exire

              </div>

              {/* Title */}
              <h3 className="mt-3 text-2xl font-semibold text-white">

                Compounding leverage

              </h3>

              {/* List */}
              <ul className="mt-7 space-y-4">

                {afterItems.map((item, index) => (

                  <li
                    key={index}
                    className="
                      flex items-start gap-3
                      text-sm leading-relaxed text-white/85
                      sm:text-base
                    "
                  >

                    <CircleCheck
                      className="
                        mt-0.5 h-5 w-5
                        flex-shrink-0
                        text-violet-400
                      "
                    />

                    {item}

                  </li>

                ))}

              </ul>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}