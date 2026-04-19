import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import './AdminPages.css'

function AddProduct() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if(!token) navigate('/manage')
      fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/categories')
      setCategories(res.data)
    }
    catch(error) {
      console.log(error)
    }
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!image) {
      setError('Please select an image')
      return
    }
    if(!category) {
      setError('Please select a category')
      return
    }

    setLoading(true)
    try {
      const token = localStorage.getItem('adminToken')
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('image', image)
        await axios.post(
          'http://localhost:5000/api/products',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          }
        )

        navigate('/admin/products')
      
    }
    catch(error) {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className='admin-page'>

      <div className='admin-page-sidebar'>

        <Link to='/admin/dashboard' className='admin-sidebar-logo'>
        Ankal Trading Est.</Link>

        <Link to='/admin/categories' className='admin-sidebar-link'>📋 View Categories</Link>
        <Link to='/admin/categories/add' className='admin-sidebar-link'>➕ Add Category</Link>
        <Link to='/admin/products' className='admin-sidebar-link'>📦 View Products</Link>
        <Link to='/admin/products/add' className='admin-sidebar-link'>➕ Add Product</Link>
        <Link to='/admin/services' className='admin-sidebar-link'>🔧 View Services</Link>
        <Link to='/admin/services/add' className='admin-sidebar-link'>➕ Add Service</Link>
        <Link to='/admin/enquiries' className='admin-sidebar-link'>✉️ View Enquiries</Link>
        <Link to='/admin/feedback' className='admin-sidebar-link'>💬 View Feedback</Link>

        <button className='admin-sidebar-logout' onClick={() => {
          localStorage.removeItem('adminToken') 
          window.location.href = '/manage'
        }}>Logout</button>
      </div>

      <div className='admin-page-main'>
        <div className='admin-page-header'>
          <h1>Add Product</h1>
          <Link to='admin/products' className='admin-back-btn'>
          ⬅️Back to Products</Link>
        </div>

        <div className='admin-form-wrap'>
          <form className='admin-form' onSubmit={handleSubmit}>

            {error && <div className='admin-error'>{error}</div>}

            <div className='admin-form-field'>
              <label>Product Name *</label>
              <input type='text' placeholder='Enter product name' value={name}
              onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className='admin-form-field'>
              <label>Category *</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value=''>Select a category</option>
                {categories.map(cat => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='admin-form-field'>
              <label>Product Description *</label>
              <textarea placeholder='Enter Product description'
              value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>


            <div className='admin-form-field'>
              <label>Product Image *</label>
              <div className='admin-image-upload'>
                <input type='file' accept='image/*' onChange={handleImage} id='image-input' />

                <label htmlFor='image-input' className='admin-image-label'>
                  {preview ? (
                    <img src={preview} alt='Preview' className='admin-image-preview' />
                  ) : (
                    <div className='admin-image-placeholder'>
                      <div className='admin-image-placeholder-icon'>📷</div>

                      <div>Click to choose image</div>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <button type='submit' className='admin-submit-btn' disabled={loading}>
              {loading ? 'Adding...' : 'Add Product'}
            </button>
          </form>
        </div>

        
      </div>
    </div>
  )
}

export default AddProduct
