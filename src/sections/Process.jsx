import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We map your operations end-to-end and surface every leverage point.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "A custom blueprint — prioritized by ROI, scoped to your team.",
  },
  {
    number: "03",
    title: "Automation Build",
    description:
      "We ship production systems in weeks, not quarters.",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Continuous tuning so your systems compound month over month.",
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-20 sm:py-28"
    >

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-violet-600/10 blur-3xl" />

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

            Process

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

              A clear path from chaos
              <br />
              to compounding systems

            </span>

          </h2>

        </div>

        {/* Timeline */}
        <div className="relative grid gap-6 md:grid-cols-4">

          {/* Line */}
          <div
            className="
              absolute left-[12%] right-[12%] top-7 hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-violet-500/30
              to-transparent
              md:block
            "
          />

          {steps.map((step, index) => (

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
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group relative
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

              {/* Number */}
              <div
                className="
                  flex h-14 w-14 items-center justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-violet-500 to-indigo-600
                  text-sm font-semibold text-white
                  shadow-[0_0_35px_rgba(139,92,246,0.25)]
                "
              >

                {step.number}

              </div>

              {/* Title */}
              <h3 className="mt-5 text-base font-semibold text-white">

                {step.title}

              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-white/45">

                {step.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}