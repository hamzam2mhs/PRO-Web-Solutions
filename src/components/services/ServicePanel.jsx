// src/components/services/ServicePanel.jsx
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function ServicePanel({ service }) {
  const Icon = service.icon

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* LEFT: CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient}`}
          >
            <Icon className="w-6 h-6 text-white" aria-hidden />
          </div>

          <h3 className="text-3xl font-bold text-white">
            {service.title}
          </h3>
        </div>

        <p className="text-slate-300 mb-6 leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-3">
          {service.points.map(point => (
            <li
              key={point}
              className="flex gap-3 text-slate-400"
            >
              <CheckCircle2
                className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                aria-hidden
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* RIGHT: VISUAL / DIAGRAM */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden"
      >
        {/* Subtle glow */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-10 blur-xl md:blur-2xl`}
        />

        {service.image && (
          <img
            src={service.image}
            alt={`${service.title} visual diagram`}
            width="900"
            height="600"
            loading="lazy"
            className="relative z-10 w-full rounded-xl object-contain"
          />
        )}
      </motion.div>
    </div>
  )
}
