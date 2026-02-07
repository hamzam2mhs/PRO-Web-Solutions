import { Helmet } from 'react-helmet-async'
import Layout from '../Layout'

import ServicesHero from '../components/services/ServicesHero'
import ServicesTabs from '../components/services/ServicesTabs'

export default function Services() {
  return (
    <Layout>
        <Helmet>
            <title>Services | PRO Web Solutions</title>
            <meta
                name="description"
                content="Web development, AWS cloud hosting, AI automation, and mobile app development services for small businesses and startups."
            />
            <link
                rel="canonical"
                href="https://www.prowebsolutions.ca/services"
            />
        </Helmet>

        {/* Hero Section */}
        <ServicesHero/>

        {/* Interactive Services */}
        <ServicesTabs />
    </Layout>
  )
}
