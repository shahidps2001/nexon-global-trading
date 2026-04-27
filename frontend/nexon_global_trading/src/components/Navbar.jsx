import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isAdminPage = location.pathname.startsWith('/admin')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  if (isAdminPage) return null

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>

        {/* LOGO */}
<Link to='/' className='navbar-logo'>
  <img
    src='/src/assets/NEXONLOGO.jpg'
    alt='Nexon Global Trading'
    className='navbar-logo-img'
  />
</Link>

        {/* DESKTOP LINKS */}
        <ul className='navbar-links'>
          <li>
            <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/products' className={location.pathname === '/products' ? 'active' : ''}>
              Products
            </Link>
          </li>
          <li>
            <Link to='/services' className={location.pathname === '/services' ? 'active' : ''}>
              Services
            </Link>
          </li>
          <li>
            <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to='/manage' className='navbar-manage'>
              Manage
            </Link>
          </li>
        </ul>

        {/* HAMBURGER BUTTON */}
        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>

      {/* MOBILE MENU — outside nav so it overlays everything */}
      {menuOpen && (
        <div className='navbar-mobile-overlay' onClick={() => setMenuOpen(false)}></div>
      )}
      <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`}>
        <Link to='/' onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to='/products' onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to='/services' onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to='/about' onClick={() => setMenuOpen(false)}>About</Link>
        <Link to='/contact' onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <Link to='/manage' onClick={() => setMenuOpen(false)}>Manage</Link>
      </div>
    </>
  )
}

export default Navbar