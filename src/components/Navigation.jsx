import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={closeMenu}>
                    ファイネスト レジデンス ファクトリー株式会社
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="nav-menu desktop-only">
                <Link to="/" className="nav-item">Home</Link>
                <a href="/#projects" className="nav-item">Projects</a>
                <a href="/#company" className="nav-item">Company</a>
                <Link to="/blog" className="nav-item">Blog</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <Link to="/" className="mobile-nav-item" onClick={closeMenu}>Home</Link>
                    <a href="/#projects" className="mobile-nav-item" onClick={closeMenu}>Projects</a>
                    <a href="/#company" className="mobile-nav-item" onClick={closeMenu}>Company</a>
                    <Link to="/blog" className="mobile-nav-item" onClick={closeMenu}>Blog</Link>
                    <Link to="/contact" className="mobile-nav-item" onClick={closeMenu}>Contact</Link>
                    <Link to="/privacy" className="mobile-nav-item" onClick={closeMenu}>Privacy Policy</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
