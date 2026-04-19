import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>

      <div className='footer-top'>

        {/* BRAND */}
        <div className='footer-brand'>
          <div className='footer-logo'>Nexon Global Trading</div>
          <p className='footer-desc'>
            Premium building materials supplier serving the Gulf region.
            Quality you can build on.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className='footer-col'>
          <div className='footer-col-title'>Quick Links</div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className='footer-col'>
          <div className='footer-col-title'>Contact</div>
          <ul>
            <li>📍 Ankal Trading Est. Al Jubail</li>
            <li>📞 +966 XX XXX XXXX</li>
            <li>✉ info@nexonglobaltrading.com</li>
            <li>🕐 Sun – Thu: 8AM – 6PM</li>
          </ul>
        </div>

      </div>

      <div className='footer-bottom'>
        <div>© 2025 Nexon Global Trading All rights reserved.</div>
        <div>Nexon Global Trading</div>
      </div>

    </footer>
  )
}

export default Footer