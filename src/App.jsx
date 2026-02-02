import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Services from './pages/Services'
import Process from './pages/Process'
import Faq from './pages/Faq'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
    return (
        <>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/process" element={<Process />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}
