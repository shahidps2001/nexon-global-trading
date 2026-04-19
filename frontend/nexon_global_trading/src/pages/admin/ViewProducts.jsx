import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdminPages.css'

function ViewProducts() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) navigate('/manage')
    fetchCategories()
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      fetchProducts(selectedCategory)
    }
  }, [selectedCategory])

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/categories')
      setCategories(res.data)
      if (res.data.length > 0) {
        setSelectedCategory(res.data[0]._id)
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const fetchProducts = async (categoryId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/products/category/${categoryId}`
      )
      setProducts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return
    try {
      const token = localStorage.getItem('adminToken')
      await axios.delete(
        `http://localhost:5000/api/products/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      fetchProducts(selectedCategory)
    } catch (error) {
      alert('Failed to delete product')
    }
  }

  return (
    <div className='admin-page'>

      <div className='admin-page-sidebar'>
        <Link to='/admin/dashboard' className='admin-sidebar-logo'>
          Ankal Trading Est.
        </Link>
        <Link to='/admin/categories' className='admin-sidebar-link'>📋 View Categories</Link>
        <Link to='/admin/categories/add' className='admin-sidebar-link'>➕ Add Category</Link>
        <Link to='/admin/products' className='admin-sidebar-link active'>📦 View Products</Link>
        <Link to='/admin/products/add' className='admin-sidebar-link'>➕ Add Product</Link>
        <Link to='/admin/services' className='admin-sidebar-link'>🔧 View Services</Link>
        <Link to='/admin/services/add' className='admin-sidebar-link'>➕ Add Service</Link>
        <Link to='/admin/enquiries' className='admin-sidebar-link'>✉️ View Enquiries</Link>
        <Link to='/admin/feedback' className='admin-sidebar-link'>💬 View Feedback</Link>
        <button className='admin-sidebar-logout' onClick={() => {
          localStorage.removeItem('adminToken')
          window.location.href = '/manage'
        }}>🚪 Logout</button>
      </div>

      <div className='admin-page-main'>
        <div className='admin-page-header'>
          <h1>View Products</h1>
          <Link to='/admin/products/add' className='admin-add-btn'>
            ➕ Add Product
          </Link>
        </div>

        {loading ? (
          <div className='admin-loading'>Loading...</div>
        ) : categories.length === 0 ? (
          <div className='admin-empty'>
            <div className='admin-empty-icon'>📦</div>
            <div className='admin-empty-text'>
              No categories found. Add a category first!
            </div>
            <Link to='/admin/categories/add' className='admin-submit-btn'>
              Add Category
            </Link>
          </div>
        ) : (
          <>
            {/* CATEGORY TABS */}
            <div className='admin-category-tabs'>
              {categories.map(cat => (
                <button
                  key={cat._id}
                  className={`admin-category-tab ${
                    selectedCategory === cat._id ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(cat._id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* PRODUCTS */}
            {products.length === 0 ? (
              <div className='admin-empty'>
                <div className='admin-empty-icon'>📦</div>
                <div className='admin-empty-text'>
                  No products in this category
                </div>
                <Link
                  to='/admin/products/add'
                  className='admin-submit-btn'
                >
                  Add Product
                </Link>
              </div>
            ) : (
              <div className='admin-grid'>
                {products.map(product => (
                  <div key={product._id} className='admin-card'>
                    <div className='admin-card-img'>
                      <img
                        src={`http://localhost:5000/uploads/${product.image}`}
                        alt={product.name}
                      />
                    </div>
                    <div className='admin-card-info'>
                      <div className='admin-card-category'>
                        {product.category?.name}
                      </div>
                      <div className='admin-card-name'>{product.name}</div>
                      <div className='admin-card-desc'>
                        {product.description.substring(0, 60)}...
                      </div>
                      <div className='admin-card-actions'>
                        <Link
                          to={`/admin/products/edit/${product._id}`}
                          className='admin-edit-btn'
                        >
                          ✏️ Edit
                        </Link>
                        <button
                          className='admin-delete-btn'
                          onClick={() => handleDelete(product._id)}
                        >
                          🗑️ Delete
                        </button>
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

export default ViewProducts