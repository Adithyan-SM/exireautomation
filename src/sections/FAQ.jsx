import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"

const faqs = [
  {
    question: "How long does automation take?",
    answer:
      "Most systems are designed and deployed within 2–6 weeks depending on complexity, integrations and workflow depth.",
  },
  {
    question: "What businesses do you work with?",
    answer:
      "We primarily work with startups, agencies, SaaS companies, operators and service businesses scaling their operations.",
  },
  {
    question: "What tools do you use?",
    answer:
      "We use modern automation and AI infrastructure including OpenAI, Make, n8n, Zapier, CRMs, APIs and custom internal systems.",
  },
  {
    question: "Do you provide support?",
    answer:
      "Yes. We continuously optimize, maintain and improve systems after deployment to ensure long-term reliability.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on workflow complexity, integrations and business requirements. Every system is scoped individually.",
  },
  {
    question: "Can you automate custom workflows?",
    answer:
      "Yes. Most of our projects involve custom operational systems built specifically around how the business already operates.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">

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

            FAQ

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

              Questions, answered

            </span>

          </h2>

        </div>

        {/* FAQ Items */}
        <div className="space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.03,
                }}
                className="
                  overflow-hidden
                  rounded-xl
                  border border-white/[0.06]
                  bg-white/[0.03]
                  backdrop-blur-xl
                "
              >

                {/* Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex w-full items-center justify-between
                    px-5 py-4 text-left
                  "
                >

                  <span className="pr-4 text-sm font-medium text-white sm:text-base">

                    {faq.question}

                  </span>

                  <ChevronDown
                    className={clsx(
                      "h-4 w-4 flex-shrink-0 text-white/40 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />

                </button>

                {/* Content */}
                <AnimatePresence initial={false}>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >

                      <div className="border-t border-white/[0.06] px-5 py-4">

                        <p className="text-sm leading-relaxed text-white/45">

                          {faq.answer}

                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}