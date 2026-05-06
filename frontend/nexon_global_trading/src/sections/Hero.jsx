import './Hero.css'

function Hero() {
  return (
    <section className='hero'>

      <div className='hero-bg'></div>
      <div className='hero-pattern'></div>

      <div className='hero-content'>

        {/* LEFT */}
        <div className='hero-left'>

          <div className='hero-tag'>Gulf Region's Trusted Partner</div>

          <h1 className='hero-company'>
            Nexon Global<br />Trading
          </h1>

          <div className='hero-branch'>
            Ankal Trading Est. — Al Jubail Branch
          </div>

          <p className='hero-desc'>
            Premium building materials supplier serving the Gulf region.
            Delivering quality, reliability, and excellence on every project.
          </p>

          <div className='hero-btns'>
            <a href='/products' className='hero-btn-primary'>
              Explore Products
            </a>
            <a href='/contact' className='hero-btn-outline'>
              Contact Us
            </a>
          </div>

          

        </div>

        {/* RIGHT — LOGO */}
        <div className='hero-right'>
          <div className='hero-logo-wrap'>
            <div className='hero-ring hero-ring-1'></div>
            <div className='hero-ring hero-ring-2'></div>
            <div className='hero-ring hero-ring-3'></div>
            <div className='hero-logo-circle'>
              <img
                src='/NEXONLOGO.jpg'
                alt='Nexon Global Trading'
                className='hero-logo-img'
              />
            </div>
          </div>
        </div>

      </div>

      {/* SCROLL */}
      <div className='hero-scroll'>
        <span>Scroll</span>
        <div className='hero-scroll-line'></div>
      </div>

    </section>
  )
}

export default Hero