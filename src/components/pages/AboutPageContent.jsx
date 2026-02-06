import { motion } from 'framer-motion'
import { Globe, Cpu, Cloud, CheckCircle2 } from 'lucide-react'

export default function AboutPageContent() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 text-slate-200">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About PRO Web Solutions
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Helping businesses build strong digital foundations using modern web,
          automation, and cloud technology.
        </p>
      </motion.div>

      {/* INTRO */}
      <div className="max-w-4xl mx-auto mb-24">
        <p className="text-lg text-slate-300 leading-relaxed">
          PRO Web Solutions was created to help small businesses and startups build
          a strong online presence and grow intelligently using modern technology.
          We focus on practical solutions — not buzzwords — and prioritize clarity,
          reliability, and long-term value.
        </p>
      </div>

      {/* MISSION */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
        <div>
          <h2 className="text-3xl font-semibold text-white mb-6">
            Our Mission
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Our mission is to make professional web development, automation, and
            cloud infrastructure accessible to growing businesses. Many companies
            need more than just a website — they need systems that scale as they
            grow. We bridge that gap in a way that is simple, affordable, and easy
            to understand.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
          <ul className="space-y-4 text-slate-300">
            {[
              'Clear, honest recommendations',
              'No unnecessary complexity',
              'Built for long-term growth',
              'Technology that serves real business goals',
            ].map(item => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="mb-28">
        <h2 className="text-3xl font-semibold text-white mb-10 text-center">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: 'Web Development',
              text:
                'Professional business websites, landing pages, and web apps designed for speed, clarity, and conversions.',
            },
            {
              icon: Cpu,
              title: 'AI & Automation',
              text:
                'Practical automation solutions that reduce manual work and improve response times using AI-driven workflows.',
            },
            {
              icon: Cloud,
              title: 'Cloud & AWS Infrastructure',
              text:
                'Scalable and secure cloud environments that grow with your business, built using AWS best practices.',
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
              >
                <Icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* HOW WE WORK */}
      <div className="max-w-4xl mx-auto mb-28">
        <h2 className="text-3xl font-semibold text-white mb-6">
          How We Work
        </h2>

        <p className="text-slate-300 leading-relaxed">
          We believe in clear communication and honest recommendations. Every
          project starts with understanding your business goals and constraints.
          From there, we suggest solutions that fit your needs today while allowing
          room to grow tomorrow — without overengineering or unnecessary complexity.
        </p>
      </div>

      {/* LOCATION */}
      <div className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Where We’re Based
        </h2>

        <p className="text-slate-300 leading-relaxed">
          We are based in Calgary, Alberta, and work with clients across Canada.
          Our services are delivered remotely, allowing us to collaborate
          efficiently regardless of location.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}
