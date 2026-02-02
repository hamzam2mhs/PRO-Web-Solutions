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
                    content="Frequently asked questions about websites, AI automation, AWS infrastructure, pricing, timelines, and how PRO Web Solutions works."
                />
                <link
                    rel="canonical"
                    href="https://www.prowebsolutions.ca/faq"
                />
            </Helmet>

            <FaqPageContent/>
        </Layout>
    )
}
