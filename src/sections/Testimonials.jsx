import { Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "Exire didn't sell us automation — they delivered an operating system. Our team finally has leverage.",
    initials: "AM",
    name: "Alex Morgan",
    role: "CEO, Polaris",
    result: "+$2.1M ARR in 6 months",
  },
  {
    quote:
      "We were drowning in manual ops. Within 8 weeks, 70% of it was gone. The systems just work.",
    initials: "SK",
    name: "Sara Kim",
    role: "Founder, Helios",
    result: "−72% ops time",
  },
  {
    quote:
      "Premium work. Premium thinking. They feel like an in-house team, not a vendor.",
    initials: "JO",
    name: "James O'Connor",
    role: "COO, Orbit",
    result: "3.4x pipeline",
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">

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

            Testimonials

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

              What founders &
              <br />
              operators say

            </span>

          </h2>

        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">

          {testimonials.map((testimonial, index) => (

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
              whileHover={{
                y: -10,
                scale: 1.015,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 22,
                mass: 0.4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border border-white/[0.06]
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
                transition-all duration-300
                hover:border-violet-500/20
                hover:bg-white/[0.04]
                hover:shadow-[0_0_50px_rgba(139,92,246,0.12)]
              "
            >

              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  opacity-0
                  transition duration-500
                  group-hover:opacity-100
                "
              >

                <div className="absolute inset-0 bg-violet-500/[0.03]" />

                <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

              </div>

              {/* Quote Icon */}
              <div className="relative z-10 text-violet-400">

                <Quote className="h-5 w-5" />

              </div>

              {/* Quote */}
              <p className="relative z-10 mt-4 text-sm leading-relaxed text-white/90">

                "{testimonial.quote}"

              </p>

              {/* Profile */}
              <div className="relative z-10 mt-6 flex items-center gap-3">

                {/* Avatar */}
                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-violet-500 to-indigo-600
                    text-sm font-semibold text-white
                    shadow-[0_0_30px_rgba(139,92,246,0.25)]
                  "
                >

                  {testimonial.initials}

                </div>

                {/* Info */}
                <div>

                  <div className="text-sm font-medium text-white">

                    {testimonial.name}

                  </div>

                  <div className="text-xs text-white/40">

                    {testimonial.role}

                  </div>

                </div>

              </div>

              {/* Result */}
              <div
                className="
                  relative z-10 mt-5
                  inline-flex items-center
                  rounded-full
                  border border-violet-500/20
                  bg-violet-500/[0.08]
                  px-3 py-1
                  text-xs text-violet-400
                  backdrop-blur-xl
                "
              >

                {testimonial.result}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}