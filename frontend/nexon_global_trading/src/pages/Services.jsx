import { useState, useEffect } from 'react'
import axios from 'axios'
import './Services.css'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('https://nexon-global-trading-backend1.onrender.com/api/services')
        setServices(res.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchServices()
  }, [])

  return (
    <div className='services-page'>

      {/* BANNER */}
      <div className='services-banner'>
        <div className='services-banner-content'>
          <div className='section-tag'>What We Do</div>
          <h1 className='services-page-title'>
            Our <span>Services</span>
          </h1>
          <div className='section-line'></div>
        </div>
      </div>

      {/* MAIN */}
      <div className='services-page-container'>

        {loading ? (
          <div className='services-page-loading'>Loading...</div>
        ) : services.length === 0 ? (
          <div className='services-page-empty'>
            <div className='services-page-empty-icon'>🔧</div>
            <div className='services-page-empty-text'>
              No services available yet. Check back soon!
            </div>
          </div>
        ) : (
          <div className='services-page-grid'>
            {services.map((service, index) => (
              <div key={service._id} className='services-page-card'>

                <div className='services-page-card-img'>
                  <img
                    src={`https://nexon-global-trading-backend1.onrender.com/uploads/${service.image}`}
                    alt={service.name}
                  />
                </div>

                <div className='services-page-card-info'>
                  <div className='services-page-card-num'>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className='services-page-card-name'>
                    {service.name}
                  </h3>
                  <p className='services-page-card-desc'>
                    {service.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  )
}

export default Services