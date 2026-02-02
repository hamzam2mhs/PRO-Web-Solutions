export default function ProcessPageContent() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-16 text-slate-200">
            {/* H1 */}
            <h1 className="text-4xl font-bold text-white mb-6">
                Our Process: From Idea to Scalable Solution
            </h1>

            {/* Intro */}
            <p className="text-lg text-slate-300 mb-12">
                Our process is designed to be simple, transparent, and flexible.
                Whether you need a website, AI automation, or cloud infrastructure,
                we focus on understanding your business first and delivering solutions
                that actually work in real-world conditions.
            </p>

            {/* Step 1 */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                1. Discovery & Understanding
            </h2>
            <p className="text-slate-300 mb-8">
                Every project starts with understanding your goals, challenges, and
                current setup. We take time to learn how your business operates today
                and where you want it to go, so we can recommend solutions that make
                sense — not unnecessary complexity.
            </p>

            {/* Step 2 */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                2. Planning & Recommendations
            </h2>
            <p className="text-slate-300 mb-8">
                Based on the discovery phase, we outline a clear plan and recommend
                the right mix of web development, automation, and infrastructure.
                This step ensures you get exactly what you need — whether that’s a
                simple website, an automated workflow, or a scalable cloud setup.
            </p>

            {/* Step 3 */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                3. Build & Implementation
            </h2>
            <p className="text-slate-300 mb-8">
                We design, build, and test the solution using modern, reliable
                technologies. Development is done in stages, allowing for feedback
                and adjustments along the way. Our focus is on clean execution,
                performance, and long-term maintainability.
            </p>

            {/* Step 4 */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                4. Launch, Support & Improvement
            </h2>
            <p className="text-slate-300 mb-12">
                Once everything is ready, we handle deployment and launch.
                After launch, we remain available for support, improvements,
                and future enhancements as your business grows or your needs evolve.
            </p>

            {/* How it applies */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                How This Process Applies to Different Projects
            </h2>

            <div className="space-y-6 mb-12">
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Web Development Projects
                    </h3>
                    <p className="text-slate-300">
                        From business websites to landing pages, we focus on clear
                        structure, strong messaging, and a smooth user experience
                        that helps convert visitors into customers.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        AI & Automation Projects
                    </h3>
                    <p className="text-slate-300">
                        Automation projects start with identifying repetitive tasks
                        and inefficiencies. We then design AI-powered workflows that
                        save time, reduce errors, and improve response times.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Cloud & AWS Infrastructure Projects
                    </h3>
                    <p className="text-slate-300">
                        For infrastructure work, we prioritize reliability, security,
                        and scalability. We help businesses move beyond basic hosting
                        and set up cloud environments that can grow with demand.
                    </p>
                </div>
            </div>

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
