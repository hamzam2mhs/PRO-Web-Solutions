import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Layout({ children }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const isHome = location.pathname === '/'

    /* -----------------------------
       Scroll state for navbar style
    ------------------------------*/
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    /* -----------------------------
       Consultation CTA logic
    ------------------------------*/
    const handleConsultationClick = () => {
        setIsMobileMenuOpen(false)

        if (isHome) {
            document
                .getElementById('contact-form')
                ?.scrollIntoView({ behavior: 'smooth' })
        } else {
            navigate('/#contact-form')
        }
    }

    /* -----------------------------
       Nav Item (route-based only)
    ------------------------------*/
    const NavItem = ({ label, to }) => {
        const isActive = location.pathname === to

        return (
            <Link
                to={to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 transition-colors ${
                    isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-300 hover:text-white'
                }`}
            >
                {label}
            </Link>
        )
    }

    return (
        <div className="min-h-screen bg-slate-950">
            {/* ================= NAVBAR ================= */}
            <nav
                className={`fixed top-0 left-0 right-0 z-[9999]
        bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950
        transition-all duration-300
        ${isScrolled ? 'backdrop-blur-lg border-b border-slate-800' : ''}
      `}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* LOGO */}
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="text-2xl font-bold">
                                <span className="text-white">Pro</span>
                                <span className="text-blue-500">.</span>
                            </div>
                            <div className="hidden sm:block text-xs text-slate-400 border-l border-slate-700 pl-3">
                                Free Website
                                <br />
                                Solutions
                            </div>
                        </Link>

                        {/* DESKTOP NAV */}
                        <div className="hidden md:flex items-center space-x-8">
                            <NavItem label="Services" to="/services" />
                            <NavItem label="Process" to="/process" />
                            <NavItem label="FAQ" to="/faq" />
                            <NavItem label="About" to="/about" />
                            <NavItem label="Contact" to="/contact" />

                            <Button
                                onClick={handleConsultationClick}
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                                Get Free Consultation
                            </Button>
                        </div>

                        {/* MOBILE TOGGLE */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* ================= MOBILE MENU ================= */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-slate-900 border-t border-slate-800">
                        <div className="px-4 py-6 space-y-3">
                            <NavItem label="Services" to="/services" />
                            <NavItem label="Process" to="/process" />
                            <NavItem label="FAQ" to="/faq" />
                            <NavItem label="About" to="/about" />
                            <NavItem label="Contact" to="/contact" />

                            <Button
                                onClick={handleConsultationClick}
                                className="w-full bg-blue-600 hover:bg-blue-700 mt-4"
                            >
                                Get Free Consultation
                            </Button>
                        </div>
                    </div>
                )}
            </nav>

            {/* ================= PAGE CONTENT ================= */}
            <main style={{ paddingTop: '80px' }}>{children}</main>
        </div>
    )
}
