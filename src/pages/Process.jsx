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
                content="Learn how PRO Web Solutions takes projects from idea to launch using a clear, structured process for websites, AI automation, and AWS infrastructure."
            />

            <link
                rel="canonical"
                href="https://www.prowebsolutions.ca/process"
            />

            <meta property="og:title" content="Our Process | PRO Web Solutions" />
            <meta
                property="og:description"
                content="Our step-by-step process for building websites, AI automation, and scalable AWS cloud solutions."
            />
            <meta property="og:url" content="https://www.prowebsolutions.ca/process" />
            <meta property="og:type" content="website" />
        </Helmet>


        <ProcessPageContent/>
    </Layout>
  )
}
