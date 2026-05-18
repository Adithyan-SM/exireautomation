import { ArrowRight, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28"
    >

      {/* Top Divider */}
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

      <div className="mx-auto max-w-5xl px-5 sm:px-8">

        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-white/[0.08]
            bg-white/[0.02]
            p-10 sm:p-16
            backdrop-blur-xl
          "
        >

          {/* Soft Ambient Layer */}
          <div
            className="
              absolute inset-0
              bg-white/[0.015]
              pointer-events-none
            "
          />

          <div className="relative z-10 text-center">

            {/* Icon */}
            <div
              className="
                mx-auto flex h-14 w-14 items-center justify-center
                rounded-2xl
                border border-violet-500/20
                bg-violet-500/10
                text-violet-300
              "
            >

              <Sparkles className="h-6 w-6" />

            </div>

            {/* Heading */}
            <h2
              className="
                mt-6 text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.04em]
                sm:text-5xl
              "
            >

              <span className="bg-gradient-to-b from-white to-violet-300 bg-clip-text text-transparent">

                Build Systems That
                <br />
                Scale Automatically.

              </span>

            </h2>

            {/* Description */}
            <p
              className="
                mx-auto mt-5 max-w-2xl
                text-base leading-relaxed
                text-white/45 sm:text-lg
              "
            >

              Book a free strategy call and we'll map the
              highest leverage automations for your business.

            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-violet-500
                  to-indigo-600
                  px-6 py-3
                  text-sm font-medium text-white
                  shadow-[0_0_40px_rgba(139,92,246,0.22)]
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:opacity-90
                "
              >

                Book Free Consultation

                <ArrowRight className="h-4 w-4" />

              </Link>

              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  border border-white/[0.08]
                  bg-white/[0.03]
                  px-6 py-3
                  text-sm font-medium text-white
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:bg-white/[0.05]
                "
              >

                Get Free Audit

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}