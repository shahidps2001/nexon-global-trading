import { useRef, useEffect } from 'react'
import './PartnersSection.css'

const teamPhotos = [
  {
    src: '/sajidkka1.jpeg',
    alt: 'Nexon Global Trading and Eastern Lagoon Fiberglass Factory team at the production facility',
  },
  {
    src: '/sajidkka2.jpeg',
    alt: 'Nexon Global Trading and Eastern Lagoon Fiberglass Factory partnership meeting',
  },
  {
    src: '/arabianarrow1.jpeg',
    alt: 'Nexon Global Trading and Arabian Arrow Supply & Services team meeting',
  },
  {
    src: '/arabianarrow2.jpeg',
    alt: 'Nexon Global Trading and Arabian Arrow Supply & Services collaboration',
  },
]

function PartnersSection() {
  const scrollRef = useRef(null)
  const animationRef = useRef(null)

  // Infinite auto scroll (same pattern as ProductHighlights)
  useEffect(() => {
    const slider = scrollRef.current
    if (!slider) return

    let scrollAmount = 0
    let isPaused = false

    const scroll = () => {
      if (!isPaused) {
        scrollAmount += 0.6
        slider.scrollLeft = scrollAmount

        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0
          slider.scrollLeft = 0
        }
      }
      animationRef.current = requestAnimationFrame(scroll)
    }

    animationRef.current = requestAnimationFrame(scroll)

    slider.addEventListener('mouseenter', () => { isPaused = true })
    slider.addEventListener('mouseleave', () => { isPaused = false })

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <section className='pt-section'>

      {/* HEADER */}
      <div className='pt-header'>
        <div className='section-tag'>Our Network</div>
        <h2 className='section-title'>
          Trusted <span>Partnerships</span>
        </h2>
        <div className='section-line'></div>
        <p className='pt-subtitle'>
          We work hand-in-hand with authorized manufacturing and supply
          partners to bring certified, quality products to every project.
        </p>
      </div>

      {/* PARTNER LOGOS */}
      <div className='pt-logos-row'>
        <div className='pt-logo-card'>
          <img
            src='/eastern-lagoon-logo.jpg'
            alt='Eastern Lagoon Fiberglass Factory'
          />
        </div>
        <div className='pt-logo-card'>
          <img
            src='/arabianarrow.png'
            alt='Arabian Arrow Supply and Services Co. Ltd.'
          />
        </div>
      </div>

      {/* SLIDING TEAM PHOTOS */}
      <div className='pt-track-wrap'>
        <div className='pt-track' ref={scrollRef}>

          {/* Original photos */}
          {teamPhotos.map((photo, i) => (
            <div className='pt-photo-card' key={i}>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}

          {/* Duplicated photos for seamless infinite scroll */}
          {teamPhotos.map((photo, i) => (
            <div className='pt-photo-card' key={`copy-${i}`}>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}

        </div>

        <div className='pt-fade-left'></div>
        <div className='pt-fade-right'></div>
      </div>

      {/* FOOTER */}
      <div className='pt-footer'>
        <a href='/our-clients' className='btn-primary'>
          Meet Our Partners
        </a>
      </div>

    </section>
  )
}

export default PartnersSection