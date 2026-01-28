import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Globe, Cloud, Smartphone, TrendingUp } from 'lucide-react';

const services = [
  {
    id: 'services-websites',
    icon: Globe,
    title: 'Websites & Web Apps',
    description:
        'Professional business websites, landing pages, and custom web apps built to be fast, mobile-friendly, and easy to update.',
    longText:
        'We build modern websites that guide visitors to take action — book a call, request a quote, or message you. If you are starting from scratch, we help you structure the site (home, services, about, contact) and write clear copy that explains what you do, who it is for, and why it matters. Every build is mobile-first and focused on speed and conversions, not just visuals.',
    includes: [
      'Modern UI with smooth animations',
      'Mobile-first layout + fast load times',
      'Lead capture forms + CTA sections',
      'Analytics setup to track leads',
      'On-page SEO foundation (headings + metadata)',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'services-aws',
    icon: Cloud,
    title: 'Hosting & AWS Cloud',
    description:
        'Secure, scalable hosting on AWS. We handle domains, SSL, backups, monitoring, and performance so your site stays online and fast.',
    longText:
        'Speed, uptime, and security matter — for SEO and for conversions. We can host websites and web apps with an AWS-first approach and apply best practices so your site loads quickly across Canada. If you already have hosting, we can help you migrate safely and improve performance without breaking your domain setup.',
    includes: [
      'SSL + secure hosting configuration',
      'Performance optimization (Core Web Vitals)',
      'CDN setup for faster delivery',
      'Backups + monitoring options',
      'Domain + DNS support',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'services-mobile',
    icon: Smartphone,
    title: 'iOS & Android Apps',
    description:
        'Cross-platform mobile apps for your customers or internal teams, integrated with your website and backend systems.',
    longText:
        'If your business needs a mobile app, we build cross-platform solutions that connect to your website and backend. This is ideal for booking, customer portals, internal tools, or membership experiences. We focus on clean UX, reliable performance, and making sure your app integrates properly with your systems.',
    includes: [
      'Cross-platform mobile builds',
      'API integration with your website/backend',
      'Authentication + user accounts (optional)',
      'Push notifications (optional)',
      'App store readiness guidance',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'services-marketing',
    icon: TrendingUp,
    title: 'Marketing & Automation',
    description:
        'SEO basics, Google Business setup, simple ad funnels, and chatbots that turn visitors into leads – all tracked and measured.',
    longText:
        'Marketing only works when your site is set up to convert. We help you build landing pages for ads, set up basic SEO structure, and connect your forms to follow-up workflows. If you are running Facebook or Google Ads, we can optimize the customer journey so leads don’t drop off after they click.',
    includes: [
      'Landing pages for ads (high conversion)',
      'Google Business Profile support',
      'Basic technical SEO setup',
      'Lead routing + automated follow-up',
      'Chat / FAQ automation options',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
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
              className="text-center mb-12"
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
              All in one place. Choose the mix you need — we’ll design, build, and manage it for you.
            </p>

            {/* SEO-friendly intro (adds real content without clutter) */}
            <p className="text-slate-400 max-w-4xl mx-auto mt-6 leading-relaxed">
              Pro Web Solutions helps small businesses and startups across Canada launch modern websites
              that bring leads. Based in Calgary and working remotely nationwide, we focus on fast load
              times, mobile-first layouts, and clear customer journeys — so visitors know exactly what
              to do next.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <motion.article
                    id={service.id}
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative scroll-mt-28"
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
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <p className="text-slate-400 leading-relaxed mb-5">
                      {service.longText}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-white/90 mb-3">
                        Includes
                      </h4>
                      <ul className="space-y-2 text-slate-400 text-sm">
                        {service.includes.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="text-blue-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="absolute bottom-8 right-8 text-blue-400"
                    >
                      →
                    </motion.div>
                  </div>
                </motion.article>
            ))}
          </div>
        </div>
      </section>
  );
}
