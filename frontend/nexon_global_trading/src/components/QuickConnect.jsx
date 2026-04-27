import { useState } from 'react'
import axios from 'axios'
import './QuickConnect.css'

function QuickConnect() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/enquiry`,
        formData
      )
      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', city: '', message: '' })
      setTimeout(() => {
        setSuccess(false)
        setIsOpen(false)
      }, 3000)
    } catch (error) {
      alert('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        className='qc-button'
        onClick={() => setIsOpen(true)}
      >
        <span className='qc-button-icon'>✉</span>
        <span className='qc-button-text'>Quick Connect</span>
      </button>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className='qc-overlay'
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* PANEL */}
      <div className={`qc-panel ${isOpen ? 'qc-panel-open' : ''}`}>

        {/* HEADER */}
        <div className='qc-header'>
          <div>
            <div className='qc-header-title'>Quick Connect</div>
            <div className='qc-header-sub'>
              We will get back to you within 24 hours
            </div>
          </div>
          <button
            className='qc-close'
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* SUCCESS OR FORM */}
        {success ? (
          <div className='qc-success'>
            <div className='qc-success-icon'>✓</div>
            <div className='qc-success-title'>Enquiry Sent!</div>
            <div className='qc-success-text'>
              Thank you! Our team will contact you soon.
            </div>
          </div>
        ) : (
          <form className='qc-form' onSubmit={handleSubmit}>

            <div className='qc-field'>
              <label>Full Name *</label>
              <input
                type='text'
                name='name'
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className='qc-field'>
              <label>Email Address *</label>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='qc-field'>
              <label>Phone Number *</label>
              <input
                type='tel'
                name='phone'
                placeholder='Enter your phone number'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className='qc-field'>
              <label>City *</label>
              <input
                type='text'
                name='city'
                placeholder='Enter your city'
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className='qc-field'>
              <label>Please write your message here *</label>
              <textarea
                name='message'
                placeholder='Write your message...'
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              ></textarea>
            </div>

            <button
              type='submit'
              className='qc-submit'
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>

          </form>
        )}

      </div>
    </>
  )
}

export default QuickConnect