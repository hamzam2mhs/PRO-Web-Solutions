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
                    content="PRO Web Solutions helps businesses grow through professional web development, AI automation, and scalable AWS cloud infrastructure. Based in Calgary."
                />
            </Helmet>

            <AboutPageContent />
        </Layout>
    )
}
