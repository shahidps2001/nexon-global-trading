import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'
import './AdminPages.css'

function EditCategory() {
  const [name, setName] = useState('')
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get('https://nexon-global-trading-backend.onrender.com/api/categories')
        const category = res.data.find(c => c._id === id)
        if (category) {
          setName(category.name)
          setPreview(`https://nexon-global-trading-backend.onrender.com/uploads/${category.image}`)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategory()
  }, [id])

  const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const token = localStorage.getItem('adminToken')
      const formData = new FormData()
      formData.append('name', name)
      if (image) formData.append('image', image)
      await axios.put(
        `https://nexon-global-trading-backend.onrender.com/api/categories/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      navigate('/admin/categories')
    } catch (error) {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className='admin-page'>

      <div className='admin-page-sidebar'>
        <Link to='/admin/dashboard' className='admin-sidebar-logo'>
          Ankal Trading Est.
        </Link>
        <Link to='/admin/categories' className='admin-sidebar-link active'>📋 View Categories</Link>
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
        }}>🚪 Logout</button>
      </div>

      <div className='admin-page-main'>
        <div className='admin-page-header'>
          <h1>Edit Category</h1>
          <Link to='/admin/categories' className='admin-back-btn'>
            ← Back to Categories
          </Link>
        </div>

        <div className='admin-form-wrap'>
          <form className='admin-form' onSubmit={handleSubmit}>

            {error && <div className='admin-error'>{error}</div>}

            <div className='admin-form-field'>
              <label>Category Name *</label>
              <input
                type='text'
                placeholder='Enter category name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className='admin-form-field'>
              <label>Category Image (leave empty to keep current)</label>
              <div className='admin-image-upload'>
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleImage}
                  id='image-input'
                />
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

            <button
              type='submit'
              className='admin-submit-btn'
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>

          </form>
        </div>
      </div>

    </div>
  )
}

export default EditCategory