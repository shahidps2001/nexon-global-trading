import { useState } from 'react'
import axios from 'axios'
import './PriceCalculator.css'

const VAT_RATE = 0.15

function PriceCalculator({ product, onClose }) {
  const [quantity, setQuantity] = useState(1)
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const unitPrice = product.price || 0
  const subtotal = unitPrice * quantity
  const vat = subtotal * VAT_RATE
  const total = subtotal + vat

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/price-enquiry`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          productName: product.name,
          quantity,
          unitPrice,
          subtotal,
          vat,
          total
        }
      )
      setSuccess(true)
    } catch (error) {
      alert('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <>
      {/* OVERLAY */}
      <div className='calc-overlay' onClick={onClose}></div>

      {/* POPUP */}
      <div className='calc-popup'>

        {/* HEADER */}
        <div className='calc-header'>
          <div>
            <div className='calc-header-tag'>Bulk Price Calculator</div>
            <div className='calc-header-name'>{product.name}</div>
          </div>
          <button className='calc-close' onClick={onClose}>✕</button>
        </div>

        {success ? (
          <div className='calc-success'>
            <div className='calc-success-icon'>✓</div>
            <div className='calc-success-title'>Enquiry Submitted!</div>
            <div className='calc-success-text'>
              Our team will contact you with a formal quotation soon.
            </div>
            <button className='calc-btn' onClick={onClose}>Close</button>
          </div>
        ) : (
          <div className='calc-body'>

            {step === 1 && (
              <>
                {/* PRODUCT INFO */}
                <div className='calc-product-info'>
                  <img
                    src={`${import.meta.env.VITE_API_URL}/uploads/${product.image}`}
                    alt={product.name}
                    className='calc-product-img'
                  />
                  <div className='calc-product-details'>
                    <div className='calc-product-name'>{product.name}</div>
                    <div className='calc-product-category'>
                      {product.category?.name}
                    </div>
                    <div className='calc-product-price'>
                      SAR {unitPrice.toFixed(2)}
                      <span> / piece</span>
                    </div>
                  </div>
                </div>

                {/* QUANTITY */}
                <div className='calc-quantity-wrap'>
                  <div className='calc-label'>Enter Quantity (pieces)</div>
                  <div className='calc-quantity-control'>
                    <button
                      className='calc-qty-btn'
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    >
                      −
                    </button>
                    <input
                      type='number'
                      min='1'
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className='calc-qty-input'
                    />
                    <button
                      className='calc-qty-btn'
                      onClick={() => setQuantity(q => q + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* BREAKDOWN */}
                <div className='calc-breakdown'>
                  <div className='calc-breakdown-title'>Price Breakdown</div>

                  <div className='calc-row'>
                    <span>Unit Price</span>
                    <span>SAR {unitPrice.toFixed(2)}</span>
                  </div>
                  <div className='calc-row'>
                    <span>Quantity</span>
                    <span>{quantity} pieces</span>
                  </div>
                  <div className='calc-row'>
                    <span>Subtotal</span>
                    <span>SAR {subtotal.toFixed(2)}</span>
                  </div>
                  <div className='calc-row'>
                    <span>VAT (15%)</span>
                    <span>SAR {vat.toFixed(2)}</span>
                  </div>
                  <div className='calc-row total'>
                    <span>Total Amount</span>
                    <span>SAR {total.toFixed(2)}</span>
                  </div>
                </div>

                {unitPrice === 0 ? (
                  <div className='calc-no-price'>
                    Price not available yet. Contact us for a quote.
                  </div>
                ) : (
                  <button
                    className='calc-btn'
                    onClick={() => setStep(2)}
                  >
                    Proceed to Enquiry →
                  </button>
                )}
              </>
            )}

            {step === 2 && (
              <>
                {/* SUMMARY */}
                <div className='calc-summary'>
                  <div className='calc-summary-title'>Order Summary</div>
                  <div className='calc-row'>
                    <span>Product</span>
                    <span>{product.name}</span>
                  </div>
                  <div className='calc-row'>
                    <span>Quantity</span>
                    <span>{quantity} pieces</span>
                  </div>
                  <div className='calc-row total'>
                    <span>Total (inc. VAT)</span>
                    <span>SAR {total.toFixed(2)}</span>
                  </div>
                </div>

                {/* CONTACT FORM */}
                <form className='calc-form' onSubmit={handleSubmit}>
                  <div className='calc-form-title'>Your Contact Details</div>

                  <div className='calc-field'>
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

                  <div className='calc-field'>
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

                  <div className='calc-field'>
                    <label>Phone Number *</label>
                    <input
                      type='tel'
                      name='phone'
                      placeholder='Enter your phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='calc-form-btns'>
                    <button
                      type='button'
                      className='calc-btn-outline'
                      onClick={() => setStep(1)}
                    >
                      ← Back
                    </button>
                    <button
                      type='submit'
                      className='calc-btn'
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                  </div>

                </form>
              </>
            )}

          </div>
        )}

      </div>
    </>
  )
}

export default PriceCalculator