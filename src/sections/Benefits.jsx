import {
    Clock,
    TrendingUp,
    Target,
    Workflow,
    DollarSign,
    WandSparkles,
  } from "lucide-react"
  
  import { motion } from "framer-motion"
  
  const benefits = [
    {
      title: "Save Time",
      description:
        "Reclaim hundreds of hours from repetitive work.",
      icon: Clock,
    },
    {
      title: "Scale Faster",
      description:
        "Grow output without growing headcount.",
      icon: TrendingUp,
    },
    {
      title: "More Leads",
      description:
        "Always-on pipelines that compound.",
      icon: Target,
    },
    {
      title: "Better Operations",
      description:
        "Every tool talking. Every step accountable.",
      icon: Workflow,
    },
    {
      title: "Increased Revenue",
      description:
        "Speed-to-lead and conversion, automated.",
      icon: DollarSign,
    },
    {
      title: "Less Manual Work",
      description:
        "Agents handle the busy parts of the job.",
      icon: WandSparkles,
    },
  ]
  
  export default function Benefits() {
    return (
      <section
        id="about"
        className="relative py-20 sm:py-28"
      >
  
        {/* Glow */}
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
  
              Benefits
  
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
  
                What you actually feel
                <br />
                after we ship
  
              </span>
  
            </h2>
  
          </div>
  
          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
  
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
  
              return (
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
                    stiffness: 320,
                    damping: 20,
                    mass: 0.5,
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
  
                  {/* Icon */}
                  <div className="relative z-10 text-violet-400">
  
                    <Icon className="h-5 w-5" />
  
                  </div>
  
                  {/* Title */}
                  <h3 className="relative z-10 mt-4 text-base font-semibold text-white">
  
                    {benefit.title}
  
                  </h3>
  
                  {/* Description */}
                  <p className="relative z-10 mt-2 text-sm leading-relaxed text-white/45">
  
                    {benefit.description}
  
                  </p>
  
                </motion.div>
              )
            })}
  
          </div>
  
        </div>
  
      </section>
    )
  }