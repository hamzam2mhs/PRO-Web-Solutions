export default function ContactPageContent() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16 text-slate-200">
            {/* H1 */}
            <h1 className="text-4xl font-bold text-white mb-6">
                Contact PRO Web Solutions
            </h1>

            {/* Intro */}
            <p className="text-lg text-slate-300 mb-10">
                Whether you’re looking to build a website, automate workflows, or set up
                scalable cloud infrastructure, we’ll help you figure out the right next
                step. No pressure, no obligation — just a clear conversation about what
                makes sense for your business.
            </p>

            {/* What to expect */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                What to Expect When You Reach Out
            </h2>

            <ul className="list-disc list-inside space-y-2 text-slate-300 mb-10">
                <li>A short discussion about your business goals and challenges</li>
                <li>Guidance on whether a website, automation, or cloud setup makes sense</li>
                <li>Clear next steps with no long-term commitments</li>
            </ul>

            {/* Services selection */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                What Can We Help You With?
            </h2>

            <p className="text-slate-300 mb-6">
                When contacting us, feel free to mention what you’re interested in.
                If you’re not sure yet, that’s completely fine — we’ll help you decide.
            </p>

            <ul className="list-disc list-inside space-y-2 text-slate-300 mb-12">
                <li>Website or landing page</li>
                <li>AI or workflow automation</li>
                <li>Cloud or AWS infrastructure</li>
                <li>Combination of services</li>
                <li>Not sure yet — need guidance</li>
            </ul>

            {/* Contact info */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                Get in Touch
            </h2>

            <p className="text-slate-300 mb-6">
                You can reach us directly via email, or book a call once scheduling is
                available. We typically respond within one business day.
            </p>

            <div className="space-y-2 text-slate-300 mb-12">
                <p>
                    <span className="text-white font-semibold">Email:</span>{' '}
                    <a
                        href="mailto:inquire@prowebsolutions.ca"
                        className="text-blue-400 hover:underline"
                    >
                        inquire@prowebsolutions.ca
                    </a>
                </p>
                <p>
                    <span className="text-white font-semibold">Location:</span> Calgary, AB,
                    serving clients across Canada
                </p>
            </div>

            {/* CTA */}
            <a
                href="mailto:inquire@prowebsolutions.ca"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
                Start the Conversation
            </a>

            {/* Calendly placeholder */}
            <p className="text-slate-400 text-sm mt-6">
                Scheduling integration coming soon.
            </p>
        </section>
    )
}
