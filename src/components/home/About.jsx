import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { MapPin, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ y }}
        className="absolute right-0 top-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Based in</div>
                      <div className="text-xl font-bold text-white">Calgary, AB</div>
                    </div>
                  </div>
                  <div className="h-px bg-slate-700" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Projects Delivered</div>
                      <div className="text-xl font-bold text-white">40+ Websites & Apps</div>
                    </div>
                  </div>
                  <div className="h-px bg-slate-700" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Client Satisfaction</div>
                      <div className="text-xl font-bold text-white">97% Happy Clients</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10-20%</div>
                  <div className="text-xs text-blue-100">Upgrade to paid</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4"
            >
              About Us
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From free starter sites to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> full AWS-powered systems</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Pro Web Solutions is a small, technical team based in Calgary that helps businesses get online and grow.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              We don't just design pretty pages – we build complete solutions: websites, AWS cloud infrastructure, mobile apps, and marketing that work together.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Many clients start with our free website offer, then grow into custom web apps, mobile apps, and cloud setups as their business scales. Wherever you are today, we'll meet you there and create a clear, simple plan forward.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800">
                <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">Transparent Pricing</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800">
                <div className="text-3xl font-bold text-purple-400 mb-1">24-48h</div>
                <div className="text-sm text-slate-400">Response Time</div>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-full"
            >
              Apply for Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}