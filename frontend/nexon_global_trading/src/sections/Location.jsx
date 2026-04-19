import React from 'react'
import './Location.css'

function Location() {
  return (
    <section className='location-section'>

      {/* Header */}
      <div className='location-header'>
        <div className='section-tag'> Find Us</div>
        <h2 className='section-title'>
          Ankal Trading Est. <span>Al Jubail</span>
        </h2>
        <div className='section-line'></div>
        <p className='location-subtitle'>
          Strategically located in Al Jubail, Kingdom of Saudi Arabia,
          we are perfectly positioned to serve construction and
          infrastructure projects across the Eastern Province and beyond.
        </p>
      </div>


      {/* CONTENT */}
      <div className='location-container'>

        {/* LEFT DETAILS */}
        <div className='location-details'>

          <div className='location-detail-item'>
            <div className='location-detail-icon'>📍</div>

            <div className='location-detail-text'>

              <div className='location-detail-label'>Address</div>

              <div className='location-detail-value'>
                Anakal Trading Est. <br />
                Al Jubail Industrial City<br />
                Eastern Province, Saudi Arabia
              </div>
            </div>
          </div>

          <div className='location-detail-item'>

            <div className='location-detail-icon'>📞</div>

            <div className='location-detail-text'>

              <div className='location-detail-label'>Phone</div>

              <div className='location-detail-value'>+996 XX XXX XXXX</div>
            </div>
          </div>
        </div>


        <div className='location-detail-item'>
          <div className='location-detail-icon'>📧</div>

          <div className='location-detail-text'>
            <div className='location-detail-label'>Email</div>
            <div className='location-detail-value'>
              info@nexonglobaltrading.com
            </div>
          </div>
        </div>

        <div className='location-detail-item'>

          <div className='location-detail-icon'>⏰</div>

          <div className='location-detail-text'>

            <div className='location-detail-label'>Working Hours</div>

            <div className='location-detail-value'>
              Sunday - Thursday <br />
              8: 00 AM - 6: 00 PM
            </div>
          </div>
        </div>


        <div className='location-detail-item'>
            <div className='location-detail-icon'>🏢</div>
            <div className='location-detail-text'>
              <div className='location-detail-label'>Parent Company</div>
              <div className='location-detail-value'>
                Nexon Global Trading
              </div>
            </div>
          </div>
      </div>


      {/* RIGHT MAP */}

      <div className='location-map'>

        <iframe 
        title='Anakal Trading Est. Location'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.0!2d49.6!3d27.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAwJzAwLjAiTiA0OcKwMzYnMDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890'
        width='100%'
        height='100%'
        style={{ border: 0}}
        allowFullScreen= ''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'></iframe>
      </div>
    </section>
  )
}

export default Location
