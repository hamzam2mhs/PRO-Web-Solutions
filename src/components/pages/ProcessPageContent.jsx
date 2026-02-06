import ProcessHero from '../process/ProcessHero'
import ProcessTimeline from '../process/ProcessTimeline'

export default function ProcessPageContent() {
  return (
    <>
      {/* Hero / intro */}
      <ProcessHero />

      {/* Animated timeline */}
      <ProcessTimeline />

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-32 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Ready to get started?
        </h2>

        <p className="text-slate-300 mb-8">
          Let’s talk about your project and map out the best solution.
        </p>

        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold"
        >
          Book a Free Consultation
        </a>
      </section>
    </>
  )
}
