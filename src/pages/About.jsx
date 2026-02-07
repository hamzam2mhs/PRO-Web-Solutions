import { Helmet } from 'react-helmet-async'
import Layout from '../Layout'
import AboutPageContent from '../components/pages/AboutPageContent'

export default function About() {
    return (
        <Layout>
            <Helmet>
                <title>About PRO Web Solutions | Web, AI & Cloud Experts</title>

                <meta
                    name="description"
                    content="PRO Web Solutions helps businesses grow with professional web development, AI automation, and scalable AWS cloud infrastructure. Based in Calgary."
                />

                <link
                    rel="canonical"
                    href="https://www.prowebsolutions.ca/about"
                />

                <meta property="og:title" content="About PRO Web Solutions | Web, AI & Cloud Experts" />
                <meta
                    property="og:description"
                    content="Learn about PRO Web Solutions, our mission, and how we help businesses scale using web, AI, and cloud technology."
                />
                <meta property="og:url" content="https://www.prowebsolutions.ca/about" />
                <meta property="og:type" content="website" />
            </Helmet>

            <AboutPageContent/>
        </Layout>
    )
}
