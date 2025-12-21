import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Are there any hidden fees?',
    answer: 'Absolutely not! Our basic website service is completely free. Optional upgrades and additional services are available for a fee, but there are no hidden costs in our free website offering.',
  },
  {
    question: 'How long will it take to build my website?',
    answer: 'Typically, we can have your website up and running within a week, depending on the complexity and our current workload. We strive for a quick turnaround without compromising quality.',
  },
  {
    question: 'Why do you create websites for free?',
    answer: 'The motivation behind our service is straightforward: it fosters strong relationships with entrepreneurs who may engage us for more extensive paid projects as their businesses flourish. An overwhelming 97% of our clients have been satisfied, and approximately 10–20% have subsequently entrusted us with additional paid projects.',
  },
  {
    question: 'What kinds of websites do you build?',
    answer: 'Our specialty lies in crafting clean, professional websites – business sites, landing pages, and simple online stores. For businesses that need more, we also build custom web apps, connect to AWS backends, and can add companion mobile apps and marketing funnels as paid upgrades.',
  },
  {
    question: 'Will I be able to make edits to my own website?',
    answer: "Definitely! Upon completion, we'll provide you with an in-depth tutorial that demonstrates how to make further modifications on your own. This ensures you won't need to rely on a web developer for every small change.",
  },
  {
    question: 'Do you offer ongoing support for the websites?',
    answer: "While we don't offer indefinite support for free, you likely won't need it. Our goal is to empower you with the skills to manage and edit your website independently. We ensure you're well-equipped with the necessary training to handle your website's maintenance and updates with ease.",
  },
];

function FAQItem({ faq, index, isInView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/50 backdrop-blur-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
      >
        <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-slate-400 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="relative py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4"
          >
            FAQ
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Any Questions? Answered
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to know about our free website service
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}