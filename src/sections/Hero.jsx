import {
  ArrowRight,
  Activity,
  TrendingUp,
  Bot,
  Zap,
} from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="absolute right-0 top-0 h-[400px] w-[400px] bg-violet-600/10 blur-3xl" />

      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.08]">

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* TOP CONTENT */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/50 backdrop-blur-xl">

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />

            Now onboarding for Q2 — limited capacity

          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">

            <span className="bg-gradient-to-b from-white to-violet-300 bg-clip-text text-transparent">

              We Build AI Systems
              <br />
              That Scale Businesses
              <br />
              Automatically.

            </span>

          </h1>

          {/* Paragraph */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg">

            We help businesses automate operations,
            generate leads, reduce manual work and
            build scalable AI infrastructure.

          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="/contact"
              className="
                inline-flex items-center justify-center gap-2
                rounded-full
                bg-gradient-to-r
                from-violet-500 to-indigo-600
                px-6 py-3
                text-sm font-medium text-white
                shadow-[0_0_40px_rgba(139,92,246,0.25)]
                transition duration-300
                hover:opacity-90
              "
            >

              Book Free Consultation

              <ArrowRight className="h-4 w-4" />

            </a>

            <a
              href="/case-studies"
              className="
                inline-flex items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.03]
                px-6 py-3
                text-sm font-medium text-white
                backdrop-blur-xl
                transition duration-300
                hover:bg-white/[0.05]
              "
            >

              View Case Studies

            </a>

          </div>

        </div>

        {/* DASHBOARD */}
        <div className="relative mx-auto mt-16 max-w-5xl">

          {/* Glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-violet-500/10 blur-3xl" />

          {/* Main Card */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl backdrop-blur-xl sm:p-4">

            <div className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#0b0b12] to-[#07070b]">

              {/* Topbar */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

                <div className="flex items-center gap-1.5">

                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

                </div>

                <div className="text-xs text-white/40">

                  exire.ai / control room

                </div>

                <div className="hidden text-xs text-white/40 sm:block">

                  live

                </div>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-3 sm:p-4">

                {[
                  {
                    title: "Active workflows",
                    value: "126",
                    growth: "+12%",
                    icon: Activity,
                  },
                  {
                    title: "Pipeline value",
                    value: "$1.84M",
                    growth: "+38%",
                    icon: TrendingUp,
                  },
                  {
                    title: "AI agents online",
                    value: "24",
                    growth: "stable",
                    icon: Bot,
                  },
                ].map((item, index) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={index}
                      className="
                        rounded-lg
                        border border-white/10
                        bg-white/[0.03]
                        p-4
                      "
                    >

                      <div className="flex items-center justify-between text-white/40">

                        <span className="text-xs">
                          {item.title}
                        </span>

                        <Icon className="h-4 w-4" />

                      </div>

                      <div className="mt-2 text-2xl font-semibold text-white">

                        {item.value}

                      </div>

                      <div className="mt-1 text-xs text-violet-400">

                        {item.growth}

                      </div>

                    </div>
                  )
                })}

              </div>

              {/* Workflow */}
              <div className="px-4 pb-4">

                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">

                  <div className="mb-3 flex items-center justify-between">

                    <span className="text-sm text-white">

                      Lead → Close automation

                    </span>

                    <span className="inline-flex items-center gap-1 text-xs text-violet-400">

                      <Zap className="h-3 w-3" />

                      running

                    </span>

                  </div>

                  {/* Steps */}
                  <div className="flex flex-wrap gap-2 text-xs">

                    {[
                      "Capture",
                      "Enrich",
                      "Score",
                      "Route",
                      "Outreach",
                      "Book",
                      "Close",
                    ].map((step, index) => (

                      <div
                        key={index}
                        className="
                          rounded-md
                          border border-white/10
                          bg-[#0d0d14]
                          px-3 py-1.5
                          text-white/50
                        "
                      >

                        <span className="mr-1 text-violet-400">

                          0{index + 1}

                        </span>

                        {step}

                      </div>

                    ))}

                  </div>

                  {/* Chart */}
                  <div className="relative mt-4 h-16 overflow-hidden rounded-md border border-white/10 bg-black/40">

                    <svg
                      viewBox="0 0 400 60"
                      className="h-full w-full"
                    >

                      <defs>

                        <linearGradient id="g" x1="0" x2="1">

                          <stop
                            offset="0%"
                            stopColor="#8b5cf6"
                          />

                          <stop
                            offset="100%"
                            stopColor="#6366f1"
                          />

                        </linearGradient>

                      </defs>

                      <path
                        d="M0 45 C 40 30, 80 50, 120 35 S 200 10, 240 25 S 320 50, 400 15"
                        stroke="url(#g)"
                        strokeWidth="2"
                        fill="none"
                      />

                    </svg>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 sm:gap-6">

          {[
            {
              value: "120K+",
              label: "Hours Saved",
            },
            {
              value: "850+",
              label: "Workflows Automated",
            },
            {
              value: "$12M",
              label: "Revenue Generated",
            },
            {
              value: "180+",
              label: "Clients Served",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                p-5
                text-center
                backdrop-blur-xl
                transition duration-300
                hover:-translate-y-1
              "
            >

              <div className="text-2xl font-semibold text-violet-300 sm:text-3xl">

                {item.value}

              </div>

              <div className="mt-1 text-xs text-white/45 sm:text-sm">

                {item.label}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Bottom Divider */}
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

    </section>
  )
}