import { Helmet } from 'react-helmet-async'
import Layout from '../Layout'
import FaqPageContent from '../components/pages/FaqPageContent'

export default function Faq() {
    return (
        <Layout>
            <Helmet>
                <title>FAQs | PRO Web Solutions</title>

                <meta
                    name="description"
                    content="Frequently asked questions about free websites, AI automation, AWS cloud infrastructure, pricing, timelines, and how PRO Web Solutions works."
                />

                <link
                    rel="canonical"
                    href="https://www.prowebsolutions.ca/faq"
                />

                <meta property="og:title" content="FAQs | PRO Web Solutions" />
                <meta
                    property="og:description"
                    content="Answers to common questions about websites, AI automation, AWS infrastructure, and working with PRO Web Solutions."
                />
                <meta property="og:url" content="https://www.prowebsolutions.ca/faq" />
                <meta property="og:type" content="website" />
            </Helmet>

            <FaqPageContent/>
        </Layout>
    )
}
