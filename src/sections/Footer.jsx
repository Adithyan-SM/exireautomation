import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-black">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute left-1/2 top-0
            h-[320px] w-[320px]
            -translate-x-1/2
            rounded-full
            bg-violet-600/10
            blur-3xl
          "
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-violet-500
                  to-purple-700
                  shadow-[0_0_30px_rgba(139,92,246,0.35)]
                "
              >

                <span className="text-sm font-semibold text-white">

                  E

                </span>

              </div>

              <h3 className="text-base font-semibold text-white">

                Exire Automation

              </h3>

            </div>

            <p
              className="
                mt-5 max-w-xs
                text-sm leading-relaxed
                text-white/45
              "
            >

              AI systems, automation,
              and scalable infrastructure
              built for modern businesses.

            </p>

          </div>

          {/* Company */}
          <div>

            <h4
              className="
                text-[11px] uppercase
                tracking-[0.22em]
                text-white/35
              "
            >

              Company

            </h4>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/about"
                className="text-sm text-white/65 hover:text-white"
              >

                About

              </Link>

              <Link
                to="/services"
                className="text-sm text-white/65 hover:text-white"
              >

                Services

              </Link>

              <Link
                to="/case-studies"
                className="text-sm text-white/65 hover:text-white"
              >

                Case Studies

              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/65 hover:text-white"
              >

                Contact

              </Link>

            </div>

          </div>

          {/* Services */}
          <div>

            <h4
              className="
                text-[11px] uppercase
                tracking-[0.22em]
                text-white/35
              "
            >

              Services

            </h4>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/services"
                className="text-sm text-white/65 hover:text-white"
              >

                AI Automation

              </Link>

              <Link
                to="/services"
                className="text-sm text-white/65 hover:text-white"
              >

                CRM Systems

              </Link>

              <Link
                to="/services"
                className="text-sm text-white/65 hover:text-white"
              >

                Lead Generation

              </Link>

              <Link
                to="/services"
                className="text-sm text-white/65 hover:text-white"
              >

                AI Agents

              </Link>

            </div>

          </div>

          {/* Connect */}
          <div>

            <h4
              className="
                text-[11px] uppercase
                tracking-[0.22em]
                text-white/35
              "
            >

              Connect

            </h4>

            <div className="mt-5 flex flex-col gap-4">

              <a
                href="mailto:hello@exireautomation.com"
                className="text-sm text-white/65 hover:text-white"
              >

                hello@exireautomation.com

              </a>

              <Link
                to="/contact"
                className="text-sm text-white/65 hover:text-white"
              >

                Book Strategy Call

              </Link>

              <a
                href="https://instagram.com/exire.media"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/65 hover:text-white"
              >

                Instagram

              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div
          className="
            mt-14 flex flex-col
            items-center justify-between
            gap-4 border-t border-white/[0.06]
            pt-6 text-xs text-white/35
            sm:flex-row
          "
        >

          <p>

            © 2026 Exire Automation.
            All rights reserved.

          </p>

          <div className="flex items-center gap-6">

            <Link
              to="/"
              className="hover:text-white"
            >

              Privacy

            </Link>

            <Link
              to="/"
              className="hover:text-white"
            >

              Terms

            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}