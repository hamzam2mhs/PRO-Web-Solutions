import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Is the website really free?',
    a: `Yes. We offer a free starter website for new businesses. This covers a
    professional, functional website to help you get online quickly.
    Optional upgrades, additional features, or ongoing services are discussed
    transparently if and when you need them.`,
  },
  {
    q: 'What types of businesses do you work with?',
    a: `We primarily work with small businesses, startups, solo founders,
    and growing teams. Our approach adapts to businesses at different stages —
    from launching their first website to scaling operations with automation
    and cloud infrastructure.`,
  },
  {
    q: 'What kind of AI automation do you build?',
    a: `We focus on practical AI and workflow automation that solves real
    problems — such as automating repetitive tasks, improving lead handling,
    streamlining internal workflows, and connecting systems so tools work
    better together.`,
  },
  {
    q: 'Do I need AWS or cloud infrastructure for my business?',
    a: `Not always. Many businesses can start with simple hosting solutions.
    We recommend AWS or cloud infrastructure only when it makes sense —
    for scalability, reliability, or custom backend systems.`,
  },
  {
    q: 'Can I start small and scale later?',
    a: `Absolutely. Many clients begin with a basic website and gradually
    expand into automation or cloud-based solutions as their business grows.
    Our services support this progression without forcing upfront investment.`,
  },
  {
    q: 'Are there long-term contracts or commitments?',
    a: `No. We don’t lock clients into long-term contracts. Each project or
    service is discussed clearly, and you stay in control of how and when
    you continue working with us.`,
  },
]

export default function FaqPageContent() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="max-w-5xl mx-auto px-4 py-24 text-slate-200">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Clear answers to common questions about our services, pricing,
          and how we work.
        </p>
      </motion.div>

      {/* FAQ LIST */}
      <div className="space-y-4 mb-20">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 border border-slate-800 rounded-xl"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.q}
                </span>
                {isOpen ? (
                  <Minus className="w-5 h-5 text-blue-400" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-400" />
                )}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold"
        >
          Still Have Questions? Let’s Talk
        </a>
      </div>
    </section>
  )
}
