import { motion } from 'framer-motion'
import { Mail, MapPin, CheckCircle2 } from 'lucide-react'

export default function ContactPageContent() {
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
          Contact PRO Web Solutions
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Whether you’re planning a website, automation, or cloud setup,
          we’ll help you figure out the right next step — no pressure,
          no obligation.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            What to Expect
          </h2>

          <p className="text-slate-300 mb-6">
            Reaching out starts with a simple conversation.
            We focus on understanding your business before
            recommending anything.
          </p>

          <ul className="space-y-3">
            {[
              'Short discussion about your goals and challenges',
              'Guidance on what solutions actually make sense',
              'Clear next steps with no long-term commitments',
            ].map(item => (
              <li key={item} className="flex gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            What We Can Help With
          </h2>

          <p className="text-slate-300 mb-6">
            You don’t need to have everything figured out.
            Mention anything that sounds relevant — or nothing at all.
          </p>

          <ul className="space-y-3 text-slate-300">
            <li>• Website or landing page</li>
            <li>• AI or workflow automation</li>
            <li>• Cloud or AWS infrastructure</li>
            <li>• Combination of services</li>
            <li>• Not sure yet — need guidance</li>
          </ul>
        </motion.div>
      </div>

      {/* CONTACT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center"
      >
        <h2 className="text-2xl font-semibold text-white mb-6">
          Get in Touch
        </h2>

        <div className="flex flex-col items-center gap-4 mb-8 text-slate-300">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-400" />
            <a
              href="mailto:inquire@prowebsolutions.ca"
              className="text-blue-400 hover:underline"
            >
              inquire@prowebsolutions.ca
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>Calgary, AB — serving clients across Canada</span>
          </div>
        </div>

        <a
          href="mailto:inquire@prowebsolutions.ca"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold"
        >
          Start the Conversation
        </a>

        <p className="text-slate-400 text-sm mt-6">
          Scheduling integration coming soon.
        </p>
      </motion.div>
    </section>
  )
}
