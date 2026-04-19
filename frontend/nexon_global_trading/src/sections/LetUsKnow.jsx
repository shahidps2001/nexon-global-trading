import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './LetUsKnow.css'

function LetUsKnow() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)


    try {
      await axios.post('https://nexon-global-trading-backend1.onrender.com/api/feedback', formData)
      setSuccess(true)
      setFormData({ email: '', message: '' })
        setTimeout(() => setSuccess(false), 4000)
      
    }
    catch(error) {
      alert('Somethings went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <section className='luk-section'>

      <div className='luk-container'>

        {/* LEFT — TEXT */}
        <div className='luk-text'>
          <div className='section-tag'>Your Opinion Matters</div>
          <h2 className='section-title'>
            Let Us <span>Know</span>
          </h2>
          <div className='section-line'></div>
          <p className='luk-desc'>
            We value your feedback. Share your experience with us
            and help us serve you better. Your thoughts drive our
            commitment to excellence.
          </p>
          <div className='luk-features'>
            <div className='luk-feature'>
              <div className='luk-feature-icon'>💬</div>
              <div className='luk-feature-text'>Share Your Experience</div>
            </div>
            <div className='luk-feature'>
              <div className='luk-feature-icon'>⭐</div>
              <div className='luk-feature-text'>Rate Our Services</div>
            </div>
            <div className='luk-feature'>
              <div className='luk-feature-icon'>🚀</div>
              <div className='luk-feature-text'>Help Us Improve</div>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className='luk-form-wrap'>
          {success ? (
            <div className='luk-success'>
              <div className='luk-success-icon'>✓</div>
              <div className='luk-success-title'>Thank You!</div>
              <div className='luk-success-text'>
                Your feedback has been received.
                We appreciate you taking the time to share your thoughts.
              </div>
            </div>
          ) : (
            <form className='luk-form' onSubmit={handleSubmit}>

              <div className='luk-form-title'>Share Your Feedback</div>

              <div className='luk-field'>
                <label>Your Email *</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='luk-field'>
                <label>Your Message *</label>
                <textarea
                  name='message'
                  placeholder='Share your thoughts, experience or suggestions...'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                ></textarea>
              </div>

              <button
                type='submit'
                className='luk-submit'
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Feedback'}
              </button>

            </form>
          )}
        </div>

      </div>

    </section>
  )



}

export default LetUsKnow
