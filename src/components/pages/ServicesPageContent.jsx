export default function ServicesPageContent() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-16 text-slate-200">
            {/* H1 */}
            <h1 className="text-4xl font-bold text-white mb-6">
                Web Development, AI Automation & Cloud Services for Growing Businesses
            </h1>

            {/* Intro */}
            <p className="text-lg text-slate-300 mb-12">
                PRO Web Solutions helps businesses move from simply getting online to building
                scalable, automated systems. We provide professional web development,
                practical AI-powered automation, and secure AWS-based cloud infrastructure —
                all designed to support real business growth.
            </p>

            {/* Core Services */}
            <h2 className="text-2xl font-semibold text-white mb-6">
                Our Core Services
            </h2>

            {/* Web Development */}
            <div className="mb-10">
                <h3 className="text-xl font-semibold text-white mb-2">
                    Web Development & Digital Presence
                </h3>
                <p className="text-slate-300 mb-3">
                    We design and build modern, mobile-friendly websites that help businesses
                    establish credibility and convert visitors into customers. This includes
                    business websites, landing pages, and custom front-end solutions.
                </p>
                <p className="text-slate-300">
                    Our free starter website option is ideal for new businesses looking to get
                    online quickly, with the ability to scale later as needs grow.
                </p>
            </div>

            {/* AI Automation */}
            <div className="mb-10">
                <h3 className="text-xl font-semibold text-white mb-2">
                    AI & Business Process Automation
                </h3>
                <p className="text-slate-300 mb-3">
                    We build practical AI-driven automations that reduce repetitive work and
                    improve efficiency. Our focus is on real-world use cases — not hype.
                </p>
                <p className="text-slate-300">
                    This includes automating lead handling, customer inquiries, internal workflows,
                    and system integrations so businesses can save time and respond faster.
                </p>
            </div>

            {/* AWS / Cloud */}
            <div className="mb-14">
                <h3 className="text-xl font-semibold text-white mb-2">
                    Cloud Infrastructure & AWS Setup
                </h3>
                <p className="text-slate-300 mb-3">
                    We help businesses deploy and manage reliable cloud infrastructure using AWS.
                    From hosting websites and applications to setting up scalable backend systems,
                    we focus on performance, security, and long-term maintainability.
                </p>
                <p className="text-slate-300">
                    This is ideal for businesses that are growing beyond shared hosting and need
                    infrastructure that can scale with demand.
                </p>
            </div>

            {/* Who it's for */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                Who These Services Are For
            </h2>
            <p className="text-slate-300 mb-12">
                Our services are designed for small businesses, startups, solo founders,
                and growing teams that want a strong online presence today and smarter
                systems tomorrow — without unnecessary complexity or enterprise pricing.
            </p>

            {/* Process preview */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                How Our Engagement Typically Works
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-12">
                <li>Understand your business goals and current challenges</li>
                <li>Recommend the right mix of web, automation, and infrastructure</li>
                <li>Design, build, and test the solution</li>
                <li>Launch, monitor, and improve over time</li>
            </ol>

            {/* Trust */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                Why Businesses Choose PRO Web Solutions
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300 mb-12">
                <li>Free starter website options available</li>
                <li>Focus on practical, business-ready AI automation</li>
                <li>Cloud solutions built with scalability in mind</li>
                <li>Clear communication and no long-term lock-ins</li>
                <li>Serving clients across Canada</li>
            </ul>

            {/* CTA */}
            <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
                Discuss Your Project
            </a>
        </section>
    )
}
