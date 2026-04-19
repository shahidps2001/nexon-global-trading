import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdminPages.css'

function ViewServices() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) navigate('/manage')
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/services')
      setServices(res.data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return
    try {
      const token = localStorage.getItem('adminToken')
      await axios.delete(
        `http://localhost:5000/api/services/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      fetchServices()
    } catch (error) {
      alert('Failed to delete service')
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
        <Link to='/admin/products' className='admin-sidebar-link'>📦 View Products</Link>
        <Link to='/admin/products/add' className='admin-sidebar-link'>➕ Add Product</Link>
        <Link to='/admin/services' className='admin-sidebar-link active'>🔧 View Services</Link>
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
          <h1>View Services</h1>
          <Link to='/admin/services/add' className='admin-add-btn'>
            ➕ Add Service
          </Link>
        </div>

        {loading ? (
          <div className='admin-loading'>Loading...</div>
        ) : services.length === 0 ? (
          <div className='admin-empty'>
            <div className='admin-empty-icon'>🔧</div>
            <div className='admin-empty-text'>No services found</div>
            <Link to='/admin/services/add' className='admin-submit-btn'>
              Add First Service
            </Link>
          </div>
        ) : (
          <div className='admin-grid'>
            {services.map(service => (
              <div key={service._id} className='admin-card'>
                <div className='admin-card-img'>
                  <img
                    src={`http://localhost:5000/uploads/${service.image}`}
                    alt={service.name}
                  />
                </div>
                <div className='admin-card-info'>
                  <div className='admin-card-name'>{service.name}</div>
                  <div className='admin-card-desc'>
                    {service.description.substring(0, 60)}...
                  </div>
                  <div className='admin-card-actions'>
                    <Link
                      to={`/admin/services/edit/${service._id}`}
                      className='admin-edit-btn'
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      className='admin-delete-btn'
                      onClick={() => handleDelete(service._id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default ViewServices