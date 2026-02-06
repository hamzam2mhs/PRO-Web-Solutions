// src/components/services/ServicesTabs.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from './servicesData'
import ServicePanel from './ServicePanel'

export default function ServicesTabs() {
  const [active, setActive] = useState(services[0].id)

  const activeService = services.find(s => s.id === active)

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map(service => {
            const Icon = service.icon
            const isActive = active === service.id

            return (
              <button
                key={service.id}
                onClick={() => setActive(service.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all
                  ${isActive
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'border-slate-700 text-slate-300 hover:text-white'
                  }`}
              >
                <Icon className="w-4 h-4" />
                {service.label}
              </button>
            )
          })}
        </div>

        {/* Animated Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ServicePanel service={activeService} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
