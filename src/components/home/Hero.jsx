import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98])
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0])

  const scrollTo = (id) =>
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
      <section
          ref={heroRef}
          className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
      >
        {/* BACKGROUND (LOCKED BELOW NAVBAR) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        {/* CONTENT */}
        <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center"
            style={{ y, opacity, scale }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            For Small Businesses & New Startups
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            We build your first<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            professional website
          </span><br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">for free</span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Get customers online in <span className="text-white font-semibold">days</span>, not months.
            We handle design, development, hosting, and marketing.
          </p>

          <div className="flex justify-center gap-6 mb-10 flex-wrap">
            {['Free starter website', 'Live in 24–48 hours', 'No hidden fees'].map(
                (item) => (
                    <div key={item} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      {item}
                    </div>
                )
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
                onClick={() => scrollTo('contact')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
            >
              Start My Free Website <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
                onClick={() => scrollTo('process')}
                size="lg"
                variant="outline"
                className="border-slate-700 text-white px-8 py-6"
            >
              See How It Works
            </Button>
          </div>
        </motion.div>
      </section>
  )
}
