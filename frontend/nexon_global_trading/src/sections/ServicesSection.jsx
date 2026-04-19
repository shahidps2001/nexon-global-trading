import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ServicesSection.css';

function ServicesSection() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res= await axios.get('http://localhost:5000/api/services')
        setServices(res.data)
      }
      catch(error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchServices()
  }, [])

  useEffect(() => {
    const slider = scrollRef.current
    if(!slider) return
    let scrollAmount = 0
    const timer = setInterval(() => {
      scrollAmount += 1
      slider.scrollLeft = scrollAmount
      if( scrollAmount  >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0
      }
    }, 20)
    return () => clearInterval(timer)
  }, [services])

  return (
    <section className='services-section'>


      {/* HEADER */}
      <div className='services-header'>

        <div className='section-tag'>What We do</div>
        <h2 className='section-title'>
          Our <span>Services</span>
        </h2>
        <div className='section-line'></div>
        <p className='services-subtitle'>
          We provide end-to-end solutions for all your building
          material needs across the Gulf region.
        </p>
      </div>


      {/* SCROLL TRACK */}
      {loading ? (
        <div className='services-loading'>Loading services...</div>
      ) : services.length === 0 ? (
        <div className='services-empty'>
          <div className='services-empty-icon'></div>
          <div className='services-empty-text'>
            Services coming soon. Check back later!
          </div>
        </div>
      ) : (
        <div className='services-track-wrap'>
          <div className='services-track' ref={scrollRef}>
            {[...services, ...services].map((service, index) =>(
              <div key={index} className='service-card' onClick={() => navigate('/services')}>

                <div className='services-card-img'>

                  <img src={`http://localhost:5000/uploads/${service.image}`} alt={service.name} />

                </div>
                <div className='service-card-info'>
                  <div className='service-card-num'>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className='service-card-name'>{service.name}</div>
                  <div className='service-card-desc'>
                    {service.description?.substring(0, 80) || 'No description available'}...
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='services-fade-left'></div>
          <div className='services-fade-right'></div>
        </div>
      )}

       {/* VIEW ALL */}
      <div className='services-footer'>
        <a href='/services' className='btn-primary'>
          View All Services
        </a>
      </div>

      
    </section>
  )
}

export default ServicesSection
