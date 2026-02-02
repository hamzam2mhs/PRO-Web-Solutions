export default function AboutPageContent() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-16 text-slate-200">
            {/* H1 */}
            <h1 className="text-4xl font-bold text-white mb-6">
                About PRO Web Solutions
            </h1>

            {/* Intro */}
            <p className="text-lg text-slate-300 mb-12">
                PRO Web Solutions was created to help small businesses and startups
                build a strong online presence and grow intelligently using modern
                technology. We focus on practical solutions — not buzzwords — and
                prioritize clarity, reliability, and long-term value.
            </p>

            {/* Mission */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                Our Mission
            </h2>
            <p className="text-slate-300 mb-10">
                Our mission is to make professional web development, automation,
                and cloud infrastructure accessible to growing businesses.
                Many companies need more than just a website — they need systems
                that can scale as they grow. We help bridge that gap in a way that
                is simple, affordable, and easy to understand.
            </p>

            {/* What we do */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                What We Do
            </h2>
            <p className="text-slate-300 mb-6">
                We work with businesses at different stages, from launching their
                first website to improving internal workflows and deploying scalable
                cloud infrastructure.
            </p>

            <ul className="list-disc list-inside space-y-2 text-slate-300 mb-12">
                <li>Design and build professional business websites and landing pages</li>
                <li>Create practical AI and workflow automation solutions</li>
                <li>Set up and manage cloud infrastructure using AWS</li>
                <li>Support long-term growth with scalable, maintainable systems</li>
            </ul>

            {/* How you work */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                How We Work
            </h2>
            <p className="text-slate-300 mb-10">
                We believe in clear communication and honest recommendations.
                Every project starts with understanding your business goals and
                constraints. From there, we suggest solutions that fit your needs
                today while allowing room to grow tomorrow — without overengineering
                or unnecessary complexity.
            </p>

            {/* Location */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                Where We’re Based
            </h2>
            <p className="text-slate-300 mb-12">
                We are based in Calgary, Alberta, and work with clients across Canada.
                Our services are delivered remotely, allowing us to collaborate
                efficiently regardless of location.
            </p>

            {/* CTA */}
            <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
                Get in Touch
            </a>
        </section>
    )
}
