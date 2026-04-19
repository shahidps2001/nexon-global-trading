import { useState, useEffect } from 'react'
import axios from 'axios'
import './Products.css'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loadingCats, setLoadingCats] = useState(true)
  const [loadingProds, setLoadingProds] = useState(false)

  // Fetch categories on page load
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('https://nexon-global-trading-backend.onrender.com/api/categories')
        setCategories(res.data)
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

  // Fetch products when selectedCategory changes
  useEffect(() => {
    if (!selectedCategory) return
    const fetchProducts = async () => {
      setLoadingProds(true)
      try {
        const res = await axios.get(
          `https://nexon-global-trading-backend.onrender.com/api/products/category/${selectedCategory}`
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
                    src={`https://nexon-global-trading-backend.onrender.com/uploads/${category.image}`}
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
              <div className='products-loading'>
                Loading products...
              </div>
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
                        src={`https://nexon-global-trading-backend.onrender.com/uploads/${product.image}`}
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
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

      </div>

    </div>
  )
}

export default Products