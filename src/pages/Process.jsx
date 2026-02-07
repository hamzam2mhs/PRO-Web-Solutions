import { Helmet } from 'react-helmet-async'
import Layout from '../Layout'
import ProcessPageContent from '../components/pages/ProcessPageContent'

export default function Process() {
  return (
    <Layout>
        <Helmet>
            <title>Our Process | PRO Web Solutions</title>
            <meta
                name="description"
                content="Learn how PRO Web Solutions delivers websites, AI automation, and AWS infrastructure through a clear, step-by-step process."
            />
            <link
                rel="canonical"
                href="https://www.prowebsolutions.ca/process"
            />
        </Helmet>

        <ProcessPageContent/>
    </Layout>
  )
}
