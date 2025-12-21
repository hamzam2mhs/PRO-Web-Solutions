import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Zap, Shield, Heart } from 'lucide-react';

export default function WhyFree() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <motion.div 
        style={{ y }}
        className="absolute left-0 top-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4"
            >
              Why We Build Websites for Free
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A simple way to start working together
              <span className="text-blue-400"> long term</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Hiring a web agency can easily cost thousands upfront. That's a big ask when you're just trying to get your idea off the ground.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Our free starter website removes that barrier. We build you a clean, professional site and help you launch. As your business grows, you can choose to work with us on more advanced projects.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                'Custom web apps and integrations',
                'AWS cloud infrastructure & automation',
                'Mobile apps for iOS and Android',
                'Ongoing optimization, SEO, and marketing',
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
              
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12">
                {/* Free Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
                  <Heart className="w-4 h-4" />
                  <span>No Catch, Really Free</span>
                </div>

                {/* Pricing */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">What you pay</h3>
                  <div className="flex items-baseline gap-4 mb-2">
                    <div className="text-5xl font-bold text-white">$0</div>
                    <div className="text-slate-400">Free starter website</div>
                  </div>
                  <div className="h-px bg-slate-700 my-6" />
                  <div className="flex items-baseline gap-4">
                    <div className="text-2xl font-bold text-blue-400">Custom</div>
                    <div className="text-slate-400">Optional upgrades (apps, AWS, marketing)</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    { icon: CheckCircle2, text: 'Professional design & development' },
                    { icon: Zap, text: 'Fast, mobile-responsive site' },
                    { icon: Shield, text: 'Secure hosting included' },
                    { icon: CheckCircle2, text: 'No hidden fees or surprise invoices' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <item.icon className="w-5 h-5 text-blue-400" />
                      <span className="text-slate-300">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Note */}
                <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    We'll always agree on scope and price before we start any paid work. Most people stay just for the free site. Some later hire us for bigger projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}