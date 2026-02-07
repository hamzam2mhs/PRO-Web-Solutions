import { Helmet } from 'react-helmet-async'
import Layout from '../Layout'
import ContactPageContent from '../components/pages/ContactPageContent'

export default function Contact() {
    return (
        <Layout>
            <Helmet>
                <title>Contact PRO Web Solutions | Get a Free Consultation</title>

                <meta
                    name="description"
                    content="Contact PRO Web Solutions to discuss websites, AI automation, or AWS cloud infrastructure. Based in Calgary, serving clients across Canada."
                />

                <link
                    rel="canonical"
                    href="https://www.prowebsolutions.ca/contact"
                />

                <meta property="og:title" content="Contact PRO Web Solutions | Get a Free Consultation" />
                <meta
                    property="og:description"
                    content="Get in touch with PRO Web Solutions to discuss web development, automation, or cloud infrastructure for your business."
                />
                <meta property="og:url" content="https://www.prowebsolutions.ca/contact" />
                <meta property="og:type" content="website" />
            </Helmet>

            <ContactPageContent/>
        </Layout>
    )
}
