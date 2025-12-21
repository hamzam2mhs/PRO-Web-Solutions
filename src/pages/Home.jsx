import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Rocket, Shield, Zap } from 'lucide-react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Services from '../components/home/Services';
import WhyFree from '../components/home/WhyFree';
import Process from '../components/home/Process';
import About from '../components/home/About';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <Stats />
      <Services />
      <WhyFree />
      <Process />
      <About />
      <FAQ />
      <Contact />
    </div>
  );
}