import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Phone, Code, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Apply in 2 minutes',
    description: "Tell us about your business, what you offer, and what kind of online presence you're hoping for.",
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    number: '02',
    title: 'Free call & plan',
    description: "If it's a good fit, we book a short call, confirm what you need, and map out your free website plus any future add-ons.",
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    number: '03',
    title: 'We design & build',
    description: "We build your website, set up hosting, and make sure it's fast, secure, and mobile friendly. You approve everything before launch.",
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & grow',
    description: "We help you go live and show you how to update your site. When you're ready, we can add AWS, mobile apps, and marketing.",
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="process" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4"
          >
            How it works
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We guide you step by step
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            You don't need to be "techy." We'll walk you through the entire process.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connection Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-slate-700 to-transparent z-0" />
              )}

              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 h-full hover:border-slate-700 transition-all duration-300 group-hover:scale-105">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 flex items-center justify-center">
                  <span className="text-sm font-bold text-slate-400">{step.number}</span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} mb-6`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-6 rounded-full group"
          >
            Apply Now for a Free Starter Website
            <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}