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
                <title>
                    PRO Web Solutions | Free Business Websites, AI Automation & AWS
                </title>
                <meta
                    name="description"
                    content="PRO Web Solutions helps small businesses launch professional websites, automate workflows with AI, and build scalable AWS infrastructure across Canada."
                />
            </Helmet>

            <Hero />
            <Services />
            <Process />
            <Faq />

            <section id="contact-form">
                <ContactForm />
            </section>
        </Layout>
    )
}
