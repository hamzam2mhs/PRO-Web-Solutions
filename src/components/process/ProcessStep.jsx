// src/components/process/ProcessStep.jsx
import { motion } from 'framer-motion'

export default function ProcessStep({ step, index }) {
  const Icon = step.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex gap-6"
    >
      {/* Left: Number + line */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {step.step}
        </div>
        {index !== 3 && (
          <div className="w-px flex-1 bg-slate-700 mt-2" />
        )}
      </div>

      {/* Right: Content */}
      <div className="pb-12">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">
            {step.title}
          </h3>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-xl">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}
