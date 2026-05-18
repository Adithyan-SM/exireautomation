import { Star } from "lucide-react"

const companies = [
  "Northwind",
  "Acme Labs",
  "Lumen",
  "Vertex",
  "Quanta",
  "Polaris",
  "Helios",
  "Orbit",
]

const testimonials = [
  {
    quote:
      "Replaced 3 ops hires with one Exire build. Pipeline doubled in a quarter.",
    name: "Maya Chen",
    role: "COO, Northwind",
  },
  {
    quote:
      "Cleanest automation work we've seen. Zero hand-holding required.",
    name: "Daniel Reyes",
    role: "Founder, Lumen",
  },
  {
    quote:
      "Our team got their week back. Revenue is the side effect.",
    name: "Priya Shah",
    role: "VP RevOps, Vertex",
  },
]

export default function SocialProof() {
  return (
    <section className="border-y border-white/[0.06] bg-black py-16 sm:py-20">

      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Top Text */}
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/35">

          Trusted by operators at high-growth companies

        </p>

        {/* Companies */}
        <div className="mt-8 grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-4 lg:grid-cols-8">

          {companies.map((company, index) => (

            <div
              key={index}
              className="
                text-center text-sm font-medium
                tracking-tight text-white/45
              "
            >

              {company}

            </div>

          ))}

        </div>

        {/* Testimonials */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="
                rounded-xl
                border border-white/[0.06]
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
                transition duration-300
                hover:-translate-y-1
                hover:border-violet-500/20
              "
            >

              {/* Stars */}
              <div className="flex gap-0.5 text-violet-400">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-current"
                  />

                ))}

              </div>

              {/* Quote */}
              <p className="mt-3 text-sm leading-relaxed text-white/90">

                "{item.quote}"

              </p>

              {/* Name */}
              <div className="mt-4 text-xs text-white/40">

                {item.name} — {item.role}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}