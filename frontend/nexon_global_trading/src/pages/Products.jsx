import { useState, useEffect } from 'react'
import axios from 'axios'
import PriceCalculator from '../components/PriceCalculator'
import './Products.css'

// Set to true to bring back the price calculator button on product cards.
// Currently hidden per client request (Get Quote / WhatsApp used instead).
const SHOW_CALCULATOR = false

// TODO: confirm this is the correct WhatsApp business number (digits only, with country code, no +/spaces).
// Currently using the same number shown on the Contact page (+966 510837046).
const WHATSAPP_NUMBER = '966510837046'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loadingCats, setLoadingCats] = useState(true)
  const [loadingProds, setLoadingProds] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/categories`
        )
        setCategories(Array.isArray(res.data) ? res.data : [])
        if (res.data.length > 0) {
          setSelectedCategory(res.data[0]._id)
        }
      } catch (error) {
        console.log(error)
      }
      setLoadingCats(false)
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    if (!selectedCategory) return
    const fetchProducts = async () => {
      setLoadingProds(true)
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/products/category/${selectedCategory}`
        )
        setProducts(res.data)
      } catch (error) {
        console.log(error)
        setProducts([])
      }
      setLoadingProds(false)
    }
    fetchProducts()
  }, [selectedCategory])

  const handleCategoryClick = (id) => {
    setSelectedCategory(id)
    setProducts([])
  }

  const handleGetQuote = (product) => {
    // Opens the Quick Connect panel (floating form) and pre-fills its
    // message field with this product's name, so the enquiry the client
    // receives already says which product it's about.
    window.dispatchEvent(
      new CustomEvent('openQuickConnect', {
        detail: {
          message: `I'm interested in getting a quote for: ${product.name}`
        }
      })
    )
  }

  return (
    <div className='products-page'>

      {/* BANNER */}
      <div className='products-banner'>
        <div className='products-banner-content'>
          <div className='section-tag'>Our Catalog</div>
          <h1 className='products-page-title'>
            Our <span>Products</span>
          </h1>
          <div className='section-line'></div>
        </div>
      </div>

      {/* MAIN */}
      <div className='products-page-container'>

        {loadingCats ? (
          <div className='products-loading'>Loading...</div>
        ) : categories.length === 0 ? (
          <div className='products-empty'>
            <div className='products-empty-icon'>📦</div>
            <div className='products-empty-text'>
              No products available yet. Check back soon!
            </div>
          </div>
        ) : (
          <>
            {/* CATEGORY TABS */}
            <div className='products-categories'>
              {categories.map(category => (
                <button
                  key={category._id}
                  className={`products-category-btn ${
                    selectedCategory === category._id ? 'active' : ''
                  }`}
                  onClick={() => handleCategoryClick(category._id)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                  />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* SELECTED CATEGORY NAME */}
            <div className='products-selected-title'>
              {categories.find(c => c._id === selectedCategory)?.name}
            </div>

            {/* PRODUCTS GRID */}
            {loadingProds ? (
              <div className='products-loading'>Loading products...</div>
            ) : products.length === 0 ? (
              <div className='products-cat-empty'>
                No products in this category yet.
              </div>
            ) : (
              <div className='products-grid'>
                {products.map(product => (
                  <div key={product._id} className='product-card'>
                    <div className='product-card-img'>
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                    <div className='product-card-info'>
                      <div className='product-card-category'>
                        {product.category?.name}
                      </div>
                      <div className='product-card-name'>
                        {product.name}
                      </div>
                      <div className='product-card-desc'>
                        {product.description}
                      </div>
                      <div className='product-card-footer'>
                        <div className='product-card-price'>
                          {product.price > 0
                            ? `SAR ${product.price.toFixed(2)} / piece`
                            : 'Price on request'}
                        </div>

                        {/*
                          The price calculator is hidden for now per client request,
                          but the button + component are kept in the code in case
                          it needs to be turned back on later. To re-enable it,
                          set SHOW_CALCULATOR to true above.
                        */}
                        {SHOW_CALCULATOR && (
                          <button
                            className='product-calc-btn'
                            onClick={() => setSelectedProduct(product)}
                          >
                            🧮 Calculate
                          </button>
                        )}

                        <div className='product-action-btns'>
                          <a
                            className='product-whatsapp-btn'
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                              `Hi, I'm interested in "${product.name}". Could you share more details and pricing?`
                            )}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`Chat on WhatsApp about ${product.name}`}
                          >
                            <svg viewBox='0 0 24 24' width='16' height='16' fill='currentColor'>
                              <path d='M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.19-.31a8.2 8.2 0 0 1-1.26-4.4c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.26 8.25zm4.52-6.18c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.15.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.83-.2-.48-.4-.42-.56-.42-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.65.31-.23.25-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.6 4.14 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28z'/>
                            </svg>
                            WhatsApp
                          </a>

                          <button
                            className='product-quote-btn'
                            onClick={() => handleGetQuote(product)}
                          >
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

      </div>

      {/* PRICE CALCULATOR POPUP */}
      {selectedProduct && (
        <PriceCalculator
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  )
}

export default Products