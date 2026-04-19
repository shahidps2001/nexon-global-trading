import React from 'react'
import './About.css'

function About() {

  return (

    <div className='about-page'>

      {/* HERO BANNER */}

      <div className='about-page-banner'>

        <div className='about-page-banner-content'>

          <div className='section-tag'>Who We Are</div>

          <h1 className='about-page-title'>
            About <span>Nexon Global Trading</span>
          </h1>

          <div className='section-line'></div>
        </div>
      </div>


      {/* MAIN CONTENT */}

      <div className='about-page-container'>

        {/* STORY */ }
        <div className='about-page-section'>
          <div className='about-page-text-wrap'>
            <h2 className='about-page-heading'>Our Story</h2>

            <p>
              Nexon Global Trading was founded with a singular vision -
              to become the Gulf's regions most trusted building materials
              supplier. Over the past 15yeasr, we have grown from a 
              small trading comapany into a regional powerhouse with
              branches across the Gulf.
            </p>

            <p>
              Our branch, <strong>Ankal Trading Est.</strong>, located
              in Al Jubail, Kingdom of Saudi Arabia, serves contractors,
              developers, and builders across the Eastern Province with
              premium quality building materials sourced from leading
              international manufacturers.
            </p>
          </div>

          <div className='about-page-img'>
            <img src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800'
            alt='Our Story' />
          </div>
        </div>

        {/* MISSION VISION */}

        <div className='about-page-mv'>
          <div className='about-page-mv-card'>
            <div className='about-page-mv-icon'>🎯</div>
            <h3>Our Mission</h3>
            <p>
              To deliver premium quality building materials with
              unmatched reliability, competitive pricing, and
              exceptional customer service across the Gulf region.
            </p>
          </div>
          <div className='about-page-mv-card'>
            <div className='about-page-mv-icon'>🌟</div>
            <h3>Our Vision</h3>
            <p>
              To be the leading building materials supplier in the
              Gulf, recognized for quality, integrity, and innovation
              in every project we support.
            </p>
          </div>
          <div className='about-page-mv-card'>
            <div className='about-page-mv-icon'>💎</div>
            <h3>Our Values</h3>
            <p>
              Integrity, responsibility, excellence, and unity guide
              everything we do — from sourcing materials to delivering
              them to your project site.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className='about-page-values'>
          <h2 className='about-page-heading center'>
            What Drives Us
          </h2>
          <div className='about-page-values-grid'>
            <div className='about-page-value'>
              <div className='about-page-value-icon'>⚖️</div>
              <h3>Integrity</h3>
              <p>
                We conduct all business with complete transparency
                and honesty. Our clients trust us because we always
                deliver on our promises.
              </p>
            </div>
            <div className='about-page-value'>
              <div className='about-page-value-icon'>🤝</div>
              <h3>Responsibility</h3>
              <p>
                We take full responsibility for the quality of our
                products and the reliability of our service to every
                client we work with.
              </p>
            </div>
            <div className='about-page-value'>
              <div className='about-page-value-icon'>🏆</div>
              <h3>Excellence</h3>
              <p>
                We never settle for average. From product selection
                to delivery, we pursue excellence in every aspect of
                our operations.
              </p>
            </div>
            <div className='about-page-value'>
              <div className='about-page-value-icon'>🌍</div>
              <h3>Unity</h3>
              <p>
                We believe in building lasting partnerships with our
                clients, suppliers, and communities across the Gulf
                region.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default About
