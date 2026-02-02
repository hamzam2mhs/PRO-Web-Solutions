export default function FaqPageContent() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-16 text-slate-200">
            {/* H1 */}
            <h1 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
            </h1>

            {/* Intro */}
            <p className="text-lg text-slate-300 mb-12">
                Below are answers to some of the most common questions we receive.
                If you don’t see your question here, feel free to reach out — we’re
                always happy to clarify.
            </p>

            {/* FAQ 1 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-2">
                    Is the website really free?
                </h2>
                <p className="text-slate-300">
                    Yes. We offer a free starter website for new businesses. This covers
                    a professional, functional website to help you get online quickly.
                    Optional upgrades, additional features, or ongoing services are
                    discussed transparently if and when you need them.
                </p>
            </div>

            {/* FAQ 2 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-2">
                    What types of businesses do you work with?
                </h2>
                <p className="text-slate-300">
                    We primarily work with small businesses, startups, solo founders,
                    and growing teams. Our approach is flexible and adapts to businesses
                    at different stages — from launching their first website to scaling
                    operations with automation and cloud infrastructure.
                </p>
            </div>

            {/* FAQ 3 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-2">
                    What kind of AI automation do you build?
                </h2>
                <p className="text-slate-300">
                    We focus on practical AI and workflow automation that solves real
                    problems. This can include automating repetitive tasks, improving
                    lead handling, streamlining internal workflows, or integrating
                    systems so your tools work better together. We avoid unnecessary
                    complexity or AI solutions that don’t provide real value.
                </p>
            </div>

            {/* FAQ 4 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-2">
                    Do I need AWS or cloud infrastructure for my business?
                </h2>
                <p className="text-slate-300">
                    Not always. Many businesses can start with simple hosting solutions.
                    We recommend AWS or cloud infrastructure only when it makes sense —
                    such as when you need scalability, better reliability, or custom
                    backend systems. Our goal is to recommend what fits your needs,
                    not what sounds impressive.
                </p>
            </div>

            {/* FAQ 5 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-2">
                    Can I start small and scale later?
                </h2>
                <p className="text-slate-300">
                    Absolutely. Many clients begin with a basic website and gradually
                    expand into automation or cloud-based solutions as their business
                    grows. Our services are designed to support this kind of progression
                    without forcing unnecessary upfront investment.
                </p>
            </div>

            {/* FAQ 6 */}
            <div className="mb-12">
                <h2 className="text-xl font-semibold text-white mb-2">
                    Are there long-term contracts or commitments?
                </h2>
                <p className="text-slate-300">
                    No. We don’t lock clients into long-term contracts. Each project or
                    service is discussed clearly, and you remain in control of how and
                    when you continue working with us.
                </p>
            </div>

            {/* CTA */}
            <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
                Still Have Questions? Let’s Talk
            </a>
        </section>
    )
}
