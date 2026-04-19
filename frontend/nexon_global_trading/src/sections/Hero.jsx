import './Hero.css'

function Hero() {
  return (
    <section className='hero'>

      {/* BACKGROUND */}
      <div className='hero-bg'></div>
      <div className='hero-pattern'></div>
      <div className='hero-glow'></div>

      {/* CONTENT */}

      <div className='hero-content'>

        {/*MAIN LOGO AREA*/}

        <div className='hero-logo-wrap'>
          <div className='hero-tag'>Gulf Region's Trusted Partner</div>
          <div className='hero-company'>Nexon Global Trading</div>
          <p className='hero-desc'>
            Premium Building materials supplier serving the Gulf region.
            Delivering quality, reliability, and excellence on every project.
          </p>
          <div className='hero-btns'>
            <a href='/products' className='btn-primary'>Explore Products</a>
            <a href='/contact' className='btn-outline'>Contact Us</a>
            
          </div>
        </div>

        
      </div>

      {/* SCROLL HINT */}
      <div className='hero-scroll'>
        <span>Scroll</span>
        <div className='hero-scroll-line'></div>
      </div>
    </section>
  )
}

export default Hero