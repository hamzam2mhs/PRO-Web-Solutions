import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Layout from '../Layout'

import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Process from '../components/home/Process'
import Faq from '../components/home/FAQ'
import ContactForm from '../components/home/Contact'

export default function Home() {
    const { hash } = useLocation()

    useEffect(() => {
        if (hash === '#contact-form') {
            document
                .getElementById('contact-form')
                ?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [hash])

    return (
        <Layout>
            <Helmet>
                <title>PRO Web Solutions | Free Starter Websites in Canada</title>

                <meta
                    name="description"
                    content="Free starter websites for small businesses and startups in Canada. Web development, AWS cloud hosting, AI automation, and scalable digital solutions."
                />

                <link
                    rel="canonical"
                    href="https://www.prowebsolutions.ca/"
                />

                <meta property="og:title" content="PRO Web Solutions | Free Starter Websites in Canada" />
                <meta
                    property="og:description"
                    content="Free starter websites for small businesses and startups in Canada. Web, cloud, AI automation, and scalable solutions."
                />
                <meta property="og:url" content="https://www.prowebsolutions.ca/" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Hero/>
            <Services/>
            <Process/>
            <Faq />

            <section id="contact-form">
                <ContactForm />
            </section>
        </Layout>
    )
}
