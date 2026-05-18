import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Sparkles, Menu, X } from "lucide-react"
import clsx from "clsx"

const navItems = [
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Process",
    path: "/process",
  },
  {
    name: "Case Studies",
    path: "/case-studies",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

export default function Navbar() {
  const location = useLocation()

  const [mobileOpen, setMobileOpen] =
    useState(false)

  const [scrolled, setScrolled] =
    useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener(
      "scroll",
      handleScroll
    )

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      )

  }, [])

  return (
    <header
      className={clsx(
        `
          fixed top-0 inset-x-0 z-50
          transition-all duration-300
        `,
        scrolled
          ? "bg-black/40 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent border-transparent"
      )}
    >

      <div
        className="
          mx-auto max-w-7xl
          px-5 sm:px-8
          h-16
          flex items-center justify-between
        "
      >

        {/* Logo */}
        <Link
          to="/"
          className="
            flex items-center gap-2
            group
          "
        >

          <div
            className="
              h-8 w-8 rounded-lg
              bg-gradient-to-r
              from-violet-500
              to-indigo-600
              shadow-[0_0_30px_rgba(139,92,246,0.45)]
              flex items-center justify-center
            "
          >

            <Sparkles className="h-4 w-4 text-white" />

          </div>

          <span
            className="
              font-semibold tracking-tight
              text-white
            "
          >

            Exire Automation

          </span>

        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">

          {navItems.map((item) => {

            const active =
              location.pathname === item.path

            return (

              <Link
                key={item.name}
                to={item.path}
                className={clsx(
                  "text-sm transition-colors duration-300",
                  active
                    ? "text-white"
                    : "text-white/55 hover:text-white"
                )}
              >

                {item.name}

              </Link>

            )
          })}

        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">

          <Link
            to="/contact"
            className="
              inline-flex items-center
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-indigo-600
              px-4 py-2
              text-sm font-medium text-white
              shadow-[0_0_40px_rgba(139,92,246,0.25)]
              transition-all duration-300
              hover:opacity-90
            "
          >

            Book Strategy Call

          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          aria-label="Toggle menu"
          className="
            md:hidden
            p-2 rounded-md
            text-white
          "
        >

          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}

        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (

        <div
          className="
            md:hidden
            border-t border-white/[0.06]
            bg-black/95
            backdrop-blur-2xl
          "
        >

          <div
            className="
              mx-auto max-w-7xl
              px-5 py-5
              flex flex-col gap-2
            "
          >

            {navItems.map((item) => {

              const active =
                location.pathname === item.path

              return (

                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className={clsx(
                    "rounded-xl px-4 py-3 text-sm transition-all duration-200",
                    active
                      ? "bg-white/[0.05] text-white"
                      : "text-white/55 hover:bg-white/[0.03] hover:text-white"
                  )}
                >

                  {item.name}

                </Link>

              )
            })}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() =>
                setMobileOpen(false)
              }
              className="
                mt-3 flex items-center justify-center
                rounded-full
                bg-gradient-to-r
                from-violet-500
                to-indigo-600
                px-5 py-3
                text-sm font-medium text-white
              "
            >

              Book Strategy Call

            </Link>

          </div>

        </div>

      )}

    </header>
  )
}