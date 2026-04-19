import './Contact.css'

function Contact() {
  return (
    <div className='contact-page'>

      {/* BANNER */}
      <div className='contact-banner'>
        <div className='contact-banner-content'>
          <div className='section-tag'>Get In Touch</div>
          <h1 className='contact-page-title'>
            Contact <span>Us</span>
          </h1>
          <div className='section-line'></div>
        </div>
      </div>

      {/* MAIN */}
      <div className='contact-page-container'>

        {/* TOP — CONTACT CARDS */}
        <div className='contact-cards'>
          <div className='contact-card'>
            <div className='contact-card-icon'>📍</div>
            <div className='contact-card-label'>Address</div>
            <div className='contact-card-value'>
              Ankal Trading Est.<br />
              Al Jubail Industrial City<br />
              Eastern Province, Saudi Arabia
            </div>
          </div>
          <div className='contact-card'>
            <div className='contact-card-icon'>📞</div>
            <div className='contact-card-label'>Phone</div>
            <div className='contact-card-value'>
              +966 XX XXX XXXX
            </div>
          </div>
          <div className='contact-card'>
            <div className='contact-card-icon'>✉️</div>
            <div className='contact-card-label'>Email</div>
            <div className='contact-card-value'>
              info@nexonglobaltrading.com
            </div>
          </div>
          <div className='contact-card'>
            <div className='contact-card-icon'>🕐</div>
            <div className='contact-card-label'>Working Hours</div>
            <div className='contact-card-value'>
              Sun – Thu<br />
              8:00 AM – 6:00 PM
            </div>
          </div>
        </div>

        {/* BOTTOM — MAP + DETAILS */}
        <div className='contact-bottom'>

          {/* MAP */}
          <div className='contact-map'>
            <iframe
              title='Ankal Trading Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.0!2d49.6!3d27.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAwJzAwLjAiTiA0OcKwMzYnMDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>

          {/* BRANCH INFO */}
          <div className='contact-branch'>
            <div className='contact-branch-tag'>Branch Details</div>
            <h2 className='contact-branch-title'>
              Ankal Trading Est.
            </h2>
            <p className='contact-branch-parent'>
              Nexon Global Trading
            </p>
            <div className='section-line'></div>
            <p className='contact-branch-desc'>
              Our Al Jubail branch is strategically located in the
              heart of Saudi Arabia's industrial hub, serving
              contractors and developers across the Eastern Province
              with premium building materials.
            </p>
            <div className='contact-branch-details'>
              <div className='contact-branch-detail'>
                <span className='detail-label'>City</span>
                <span className='detail-value'>Al Jubail</span>
              </div>
              <div className='contact-branch-detail'>
                <span className='detail-label'>Country</span>
                <span className='detail-value'>Saudi Arabia</span>
              </div>
              <div className='contact-branch-detail'>
                <span className='detail-label'>Phone</span>
                <span className='detail-value'>+966 XX XXX XXXX</span>
              </div>
              <div className='contact-branch-detail'>
                <span className='detail-label'>Email</span>
                <span className='detail-value'>info@nexonglobaltrading.com</span>
              </div>
              <div className='contact-branch-detail'>
                <span className='detail-label'>Hours</span>
                <span className='detail-value'>Sun–Thu 8AM–6PM</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact