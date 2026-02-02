import { Helmet } from 'react-helmet-async'
import Layout from '../Layout'
import ServicesPageContent from '../components/pages/ServicesPageContent'

export default function Services() {
    return (
        <Layout>
            <Helmet>
                <title>
                    Web Development, AI Automation & AWS Services | PRO Web Solutions
                </title>
                <meta
                    name="description"
                    content="Professional website development, AI automation, and AWS cloud infrastructure services for startups and small businesses in Canada."
                />
                <link
                    rel="canonical"
                    href="https://www.prowebsolutions.ca/services"
                />
            </Helmet>

            <ServicesPageContent/>
        </Layout>
    )
}
