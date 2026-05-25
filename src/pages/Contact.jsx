import { useState } from "react"

import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

import {
  ArrowRight,
  Calendar,
  Link,
  Mail,
} from "lucide-react"

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    problem: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {

      const response = await fetch(
        "https://adhithyanjr.app.n8n.cloud/webhook/new-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to send")
      }

      alert("Message sent successfully!")

      setFormData({
        name: "",
        email: "",
        company: "",
        problem: "",
      })

    } catch (error) {

      console.error(error)

      alert("Something went wrong.")

    }

    setLoading(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03]">

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-200px] h-[1400px] w-[1400px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[220px]" />

      </div>

      <div className="relative z-10">

        <Navbar />

        <main>

          {/* HERO */}
          <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">

            {/* Divider */}
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

            <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/50 backdrop-blur-xl">

                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

                Contact

              </div>

              {/* Heading */}
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">

                <span className="bg-gradient-to-b from-white to-violet-300 bg-clip-text text-transparent">

                  Let's Build Your
                  <br />
                  Automation Engine

                </span>

              </h1>

              {/* Paragraph */}
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg">

                Tell us about your operations.
                We'll map your highest-leverage automations
                on a free 30-minute call.

              </p>

            </div>

          </section>

          {/* CONTENT */}
          <section className="py-16 sm:py-20">

            <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-5">

              {/* LEFT */}
              <div className="space-y-4 lg:col-span-2">

                {/* Book Call */}
                <a
                  href="https://cal.com/exireautomation"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group block
                    rounded-3xl
                    border border-violet-500/20
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-violet-500/35
                    hover:shadow-[0_0_60px_rgba(139,92,246,0.12)]
                  "
                >

                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-2xl
                      border border-violet-500/20
                      bg-violet-500/10
                      text-violet-300
                    "
                  >

                    <Calendar className="h-5 w-5" />

                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">

                    Book a call

                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/45">

                    30-minute strategy session —
                    free, no pitch.

                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-violet-300 transition-all duration-200 group-hover:translate-x-1">

                    Open scheduler

                    <ArrowRight className="h-4 w-4" />

                  </span>

                </a>

                {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@exireautomation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block rounded-3xl
                  border border-white/[0.08]
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-500/20
                "
              >

                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    border border-violet-500/20
                    bg-violet-500/10
                    text-violet-300
                  "
                >

                  <Mail className="h-5 w-5" />

                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">

                  Email

                </h3>

                <p className="mt-2 text-sm text-white/45">

                  hello@exireautomation.com

                </p>

              </a>

              </div>

              {/* FORM */}
              <div className="lg:col-span-3">

                <form
                  onSubmit={handleSubmit}
                  className="
                    rounded-3xl
                    border border-white/[0.08]
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                    sm:p-8
                  "
                >

                  <div className="space-y-5">

                    {/* Row */}
                    <div className="grid gap-5 sm:grid-cols-2">

                      {/* Name */}
                      <div>

                        <label className="text-xs uppercase tracking-[0.18em] text-white/35">

                          Name

                        </label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="
                            mt-2 w-full
                            rounded-xl
                            border border-white/[0.08]
                            bg-black/20
                            px-4 py-3
                            text-sm text-white
                            placeholder:text-white/25
                            outline-none
                            transition-all
                            focus:border-violet-500/40
                          "
                        />

                      </div>

                      {/* Email */}
                      <div>

                        <label className="text-xs uppercase tracking-[0.18em] text-white/35">

                          Email

                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          required
                          className="
                            mt-2 w-full
                            rounded-xl
                            border border-white/[0.08]
                            bg-black/20
                            px-4 py-3
                            text-sm text-white
                            placeholder:text-white/25
                            outline-none
                            transition-all
                            focus:border-violet-500/40
                          "
                        />

                      </div>

                    </div>

                    {/* Company */}
                    <div>

                      <label className="text-xs uppercase tracking-[0.18em] text-white/35">

                        Company

                      </label>

                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        required
                        className="
                          mt-2 w-full
                          rounded-xl
                          border border-white/[0.08]
                          bg-black/20
                          px-4 py-3
                          text-sm text-white
                          placeholder:text-white/25
                          outline-none
                          transition-all
                          focus:border-violet-500/40
                        "
                      />

                    </div>

                    {/* Message */}
                    <div>

                      <label className="text-xs uppercase tracking-[0.18em] text-white/35">

                        What are you trying to automate?

                      </label>

                      <textarea
                        rows="6"
                        name="problem"
                        value={formData.problem}
                        onChange={handleChange}
                        placeholder="Tell us about your operations, team size, and what's slowing you down..."
                        required
                        className="
                          mt-2 w-full resize-none
                          rounded-xl
                          border border-white/[0.08]
                          bg-black/20
                          px-4 py-3
                          text-sm text-white
                          placeholder:text-white/25
                          outline-none
                          transition-all
                          focus:border-violet-500/40
                        "
                      />

                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        inline-flex items-center justify-center gap-2
                        rounded-full
                        bg-gradient-to-r
                        from-violet-500
                        to-indigo-600
                        px-6 py-3
                        text-sm font-medium text-white
                        shadow-[0_0_40px_rgba(139,92,246,0.25)]
                        transition-all duration-300
                        hover:opacity-90
                        disabled:opacity-50
                      "
                    >

                      {loading ? "Sending..." : "Send message"}

                      <ArrowRight className="h-4 w-4" />

                    </button>

                  </div>

                </form>

              </div>

            </div>

          </section>

        </main>

        <Footer />

      </div>

    </div>
  )
}