import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './ProductHighlights.css'

function ProductHighlights() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef(null)
  const animationRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://nexon-global-trading-backend1.onrender.com/api/products')
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchProducts()
  }, [])

  // Infinite auto scroll
  useEffect(() => {
    const slider = scrollRef.current
    if (!slider || products.length === 0) return

    let scrollAmount = 0
    let isPaused = false

    const scroll = () => {
      if (!isPaused) {
        scrollAmount += 0.8
        slider.scrollLeft = scrollAmount

        // Reset to beginning when reaching halfway (because we duplicated items)
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0
          slider.scrollLeft = 0
        }
      }
      animationRef.current = requestAnimationFrame(scroll)
    }

    animationRef.current = requestAnimationFrame(scroll)

    // Pause on hover
    slider.addEventListener('mouseenter', () => { isPaused = true })
    slider.addEventListener('mouseleave', () => { isPaused = false })

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [products])

  return (
    <section className='ph-section'>

      {/* HEADER */}
      <div className='ph-header'>
        <div className='section-tag'>What We Offer</div>
        <h2 className='section-title'>
          Product <span>Highlights</span>
        </h2>
        <div className='section-line'></div>
        <p className='ph-subtitle'>
          Explore our wide range of premium building materials.
          Click any product to view the full catalog.
        </p>
      </div>

      {/* CONTENT */}
      {loading ? (
        <div className='ph-loading'>Loading products...</div>
      ) : products.length === 0 ? (
        <div className='ph-empty'>
          <div className='ph-empty-icon'>📦</div>
          <div className='ph-empty-text'>
            Products coming soon. Check back later!
          </div>
        </div>
      ) : (
        <div className='ph-track-wrap'>

          {/* SCROLL TRACK */}
          <div className='ph-track' ref={scrollRef}>

            {/* Original products */}
            {products.map((product) => (
              <div
                key={product._id}
                className='ph-card'
                onClick={() => navigate('/products')}
              >
                <div className='ph-card-img'>
                  <img
                    src={`https://nexon-global-trading-backend1.onrender.com/uploads/${product.image}`}
                    alt={product.name}
                  />
                </div>
                <div className='ph-card-info'>
                  <div className='ph-card-category'>
                    {product.category?.name}
                  </div>
                  <div className='ph-card-name'>{product.name}</div>
                </div>
              </div>
            ))}

            {/* Duplicated products for infinite effect */}
            {products.map((product) => (
              <div
                key={`copy-${product._id}`}
                className='ph-card'
                onClick={() => navigate('/products')}
              >
                <div className='ph-card-img'>
                  <img
                    src={`https://nexon-global-trading-backend1.onrender.com/uploads/${product.image}`}
                    alt={product.name}
                  />
                </div>
                <div className='ph-card-info'>
                  <div className='ph-card-category'>
                    {product.category?.name}
                  </div>
                  <div className='ph-card-name'>{product.name}</div>
                </div>
              </div>
            ))}

          </div>

          {/* FADE EDGES */}
          <div className='ph-fade-left'></div>
          <div className='ph-fade-right'></div>

        </div>
      )}

      {/* VIEW ALL BUTTON */}
      <div className='ph-footer'>
        <a href='/products' className='btn-primary'>
          View All Products
        </a>
      </div>

    </section>
  )
}

export default ProductHighlights