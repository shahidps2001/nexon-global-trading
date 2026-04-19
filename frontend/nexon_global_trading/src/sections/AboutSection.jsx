import React from 'react'
import { Link  } from 'react-router-dom'
import './AboutSection.css'

function AboutSection() {
  return (
    <section className='about-section'>
      
      
      <div className='about-container'>

        <div className='about-img-wrap'>

          <div className='about-img-box'>
            <img src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800'
            alt='About Nexon Global Trading' />
          </div>

          <div className='about-exp-badge'>
            <div className='about-exp-num'>15+</div>
            <div className='about-exp-text'>Years of Excellence</div>
          </div>
        </div>

        {/* right content */}
        <div className='about-content'>

          <div className='section-tag'>Who We Are</div>
          <h2 className='section-title'>
            About <span>Nexon Global Trading</span>
          </h2>
          <div className='section-text'></div>

          <p className='about-line'>
            Nexon Global Trading is one of the Gulf region's most trusted
            names in building materials distribution. With over 15 years
            of experience, we have built a reputation for delivering
            premium quality materials to contractors, developers, and
            builders across the region.
          </p>

          <p className='about-text'>
            Nexon Global Trading is one of the Gulf region's most trusted
            names in building materials distribution. With over 15 years
            of experience, we have built a reputation for delivering
            premium quality materials to contractors, developers, and
            builders across the region.
          </p>

          <Link to='/about' className='btn-primary about-btn'>Read More</Link>


          {/* VALUES */}
          <div className='about-values'>
            <div className='about-value'>
              <div className='about-value-icon'>⚖️</div>
              <div className='about-value-label'>Integrity</div>
            </div>


            <div className='about-value'>
              <div className='about-value-icon'>🤝</div>
              <div className='about-value-label'>Resposibility</div>
            </div>


            <div className='about-value'>
              <div className='about-value-icon'>🏆</div>
              <div className='about-value-label'>Excellence</div>
            </div>



            <div className='about-value'>
              <div className='about-value-icon'>🌍</div>
              <div className='about-value-label'>Unity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
