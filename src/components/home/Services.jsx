import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Globe, Cloud, Smartphone, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Websites & Web Apps',
    description: 'Professional business websites, landing pages, and custom web apps built to be fast, mobile-friendly, and easy to update.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cloud,
    title: 'Hosting & AWS Cloud',
    description: 'Secure, scalable hosting on AWS. We handle domains, SSL, backups, monitoring, and performance so your site stays online and fast.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'iOS & Android Apps',
    description: 'Cross-platform mobile apps for your customers or internal teams, integrated with your website and backend systems.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Automation',
    description: 'SEO basics, Google Business setup, simple ad funnels, and chatbots that turn visitors into leads – all tracked and measured.',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Services
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Web, Cloud, Mobile & Marketing
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            All in one place. Choose the mix you need – we'll design, build, and manage it for you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 h-full hover:border-slate-700 transition-all duration-300">
                {/* Gradient Glow on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-8 right-8 text-blue-400"
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}