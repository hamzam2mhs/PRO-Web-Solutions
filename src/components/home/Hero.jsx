import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef(null);

  // Make scroll effects relative to this Hero section (not the whole page)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Parallax + fade near the end (so you don’t get an “empty” middle)
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProcess = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <section
          ref={heroRef}
          className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

          {/* Floating Orbs */}
          {[...Array(3)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
                  animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 2,
                  }}
                  style={{ left: `${20 + i * 30}%`, top: `${20 + i * 20}%` }}
              />
          ))}
        </div>

        {/* Content */}
        <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center"
            style={{ y, opacity, scale }}
        >
          {/* Badge */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>For Small Businesses & New Startups</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            We build your first
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            professional website
          </span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">for free</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Get customers online in <span className="text-white font-semibold">days, not months</span>. No big agency prices, no tech headaches.
            We handle design, development, hosting, and marketing.
          </motion.p>

          {/* Benefits */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {['Free starter website', 'Live in 24-48 hours', 'No hidden fees'].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>{benefit}</span>
                </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-full group"
            >
              Start My Free Website
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
                onClick={scrollToProcess}
                size="lg"
                variant="outline"
                className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-6 rounded-full"
            >
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-slate-400 text-sm mt-8"
          >
            Based in Calgary • Working with clients across Canada • Limited free spots available each month
          </motion.p>

          {/* Mockup Preview */}
          <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-14 relative"
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
              <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-4 shadow-2xl"
              >
                <div className="bg-slate-950 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 p-3 border-b border-slate-800">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center text-xs text-slate-500">yourwebsite.com</div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="h-8 bg-slate-800 rounded w-1/3" />
                    <div className="h-4 bg-slate-800 rounded w-2/3" />
                    <div className="h-4 bg-slate-800 rounded w-1/2" />
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      {[...Array(3)].map((_, i) => (
                          <div key={i} className="bg-slate-800 rounded-lg p-4 aspect-square" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>
  );
}
