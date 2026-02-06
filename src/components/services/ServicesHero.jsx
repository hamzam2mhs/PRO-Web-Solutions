// src/components/services/ServicesHero.jsx
import { motion } from 'framer-motion'

export default function ServicesHero() {
  return (
    <section className="relative py-32 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Services built to help your business grow
        </motion.h1>

        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          From fast websites and AWS infrastructure to AI automation and mobile apps —
          we design and build systems that convert visitors into customers.
        </p>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent" />
    </section>
  )
}
