import {
  Cpu,
  Target,
  Database,
  MessageSquare,
  Workflow,
  Bot,
  Globe,
  Building2,
  ArrowRight,
} from "lucide-react"

import { motion } from "framer-motion"

const services = [
  {
    title: "AI Automation",
    description:
      "End-to-end systems that run your repetitive operations on autopilot.",
    icon: Cpu,
  },
  {
    title: "Lead Generation",
    description:
      "Multi-channel pipelines that fill your calendar with qualified leads.",
    icon: Target,
  },
  {
    title: "CRM Systems",
    description:
      "Custom CRMs and pipelines tuned to how your team actually sells.",
    icon: Database,
  },
  {
    title: "AI Chatbots",
    description:
      "Conversational agents that qualify, support and convert 24/7.",
    icon: MessageSquare,
  },
  {
    title: "Workflow Automation",
    description:
      "Connect every tool — eliminate the busywork between them.",
    icon: Workflow,
  },
  {
    title: "AI Agents",
    description:
      "Autonomous agents that research, write, route and close tasks.",
    icon: Bot,
  },
  {
    title: "Website Design",
    description:
      "Conversion-focused sites engineered for the modern enterprise.",
    icon: Globe,
  },
  {
    title: "Internal Systems",
    description:
      "Dashboards and tools your team will actually use every day.",
    icon: Building2,
  },
]

export default function Services() {
  return (
    <section
      id="services"
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

            Services

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

              Infrastructure for
              <br />
              the AI-native company

            </span>

          </h2>

          <p className="mt-4 text-base text-white/45 sm:text-lg">

            Eight pillars. One operating system for your business.

          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  delay: index * 0.04,
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

                {/* Icon */}
                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-lg
                    border border-violet-500/20
                    bg-violet-500/10
                    text-violet-400
                    transition duration-300
                    group-hover:bg-violet-500/15
                  "
                >

                  <Icon className="h-5 w-5" />

                </div>

                {/* Title */}
                <h3 className="mt-5 text-base font-semibold text-white">

                  {service.title}

                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-white/45">

                  {service.description}

                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="
                    mt-5 inline-flex items-center gap-1.5
                    text-xs text-violet-400
                    transition-all duration-300
                    group-hover:gap-2
                  "
                >

                  Learn more

                  <ArrowRight className="h-3.5 w-3.5" />

                </a>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}