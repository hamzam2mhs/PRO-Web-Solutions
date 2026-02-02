import { Helmet } from 'react-helmet-async'
import Layout from '../Layout'
import ContactPageContent from '../components/pages/ContactPageContent'

export default function Contact() {
    return (
        <Layout>
            <Helmet>
                <title>Contact PRO Web Solutions | Free Consultation</title>
                <meta
                    name="description"
                    content="Contact PRO Web Solutions for a free consultation about websites, AI automation, and AWS cloud infrastructure services in Canada."
                />
                <link
                    rel="canonical"
                    href="https://www.prowebsolutions.ca/contact"
                />
            </Helmet>

            <ContactPageContent/>
        </Layout>
    )
}
