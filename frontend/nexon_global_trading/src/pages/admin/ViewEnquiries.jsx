import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdminPages.css'

function ViewEnquiries() {
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) navigate('/manage')
    fetchEnquiries()
  }, [])

  const fetchEnquiries = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const res = await axios.get(
        'http://localhost:5000/api/enquiry',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setEnquiries(res.data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this enquiry?')) return
    try {
      const token = localStorage.getItem('adminToken')
      await axios.delete(
        `http://localhost:5000/api/enquiry/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      fetchEnquiries()
    } catch (error) {
      alert('Failed to delete enquiry')
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
        <Link to='/admin/services' className='admin-sidebar-link'>🔧 View Services</Link>
        <Link to='/admin/services/add' className='admin-sidebar-link'>➕ Add Service</Link>
        <Link to='/admin/enquiries' className='admin-sidebar-link active'>✉️ View Enquiries</Link>
        <Link to='/admin/feedback' className='admin-sidebar-link'>💬 View Feedback</Link>
        <button className='admin-sidebar-logout' onClick={() => {
          localStorage.removeItem('adminToken')
          window.location.href = '/manage'
        }}>🚪 Logout</button>
      </div>

      <div className='admin-page-main'>
        <div className='admin-page-header'>
          <h1>View Enquiries</h1>
          <div className='admin-count'>
            Total: {enquiries.length}
          </div>
        </div>

        {loading ? (
          <div className='admin-loading'>Loading...</div>
        ) : enquiries.length === 0 ? (
          <div className='admin-empty'>
            <div className='admin-empty-icon'>✉️</div>
            <div className='admin-empty-text'>No enquiries yet</div>
          </div>
        ) : (
          <div className='admin-table-wrap'>
            <table className='admin-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map(enquiry => (
                  <tr key={enquiry._id}>
                    <td>{enquiry.name}</td>
                    <td>{enquiry.email}</td>
                    <td>{enquiry.phone}</td>
                    <td>{enquiry.city}</td>
                    <td>{enquiry.message}</td>
                    <td>
                      {new Date(enquiry.createdAt).toLocaleDateString()}
                    </td>
                    <td>
                      <button
                        className='admin-delete-btn'
                        onClick={() => handleDelete(enquiry._id)}
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  )
}

export default ViewEnquiries