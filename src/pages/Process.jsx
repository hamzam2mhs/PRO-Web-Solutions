import { Helmet } from 'react-helmet-async'
import Layout from '../Layout'
import ProcessPageContent from '../components/pages/ProcessPageContent'

export default function Process() {
    return (
        <Layout>
            <Helmet>
                <title>
                    Our Process | How PRO Web Solutions Delivers Scalable Solutions
                </title>
                <meta
                    name="description"
                    content="Learn how PRO Web Solutions designs, builds, and launches websites, AI automation, and AWS infrastructure using a clear, step-by-step process."
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
