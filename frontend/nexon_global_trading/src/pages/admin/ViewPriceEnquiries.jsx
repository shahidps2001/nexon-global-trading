import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdminPages.css'

function ViewPriceEnquiries() {
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
        'http://localhost:5000/api/price-enquiry',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      // Make sure it's always an array
      setEnquiries(Array.isArray(res.data) ? res.data : [])
    } catch (error) {
      console.log(error)
      setEnquiries([])
    }
    setLoading(false)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this enquiry?')) return
    try {
      const token = localStorage.getItem('adminToken')
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/price-enquiry/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      fetchEnquiries()
    } catch (error) {
      alert('Failed to delete')
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
        <Link to='/admin/enquiries' className='admin-sidebar-link'>✉️ View Enquiries</Link>
        <Link to='/admin/price-enquiries' className='admin-sidebar-link active'>🧮 Price Enquiries</Link>
        <Link to='/admin/feedback' className='admin-sidebar-link'>💬 View Feedback</Link>
        <button className='admin-sidebar-logout' onClick={() => {
          localStorage.removeItem('adminToken')
          window.location.href = '/manage'
        }}>🚪 Logout</button>
      </div>

      <div className='admin-page-main'>
        <div className='admin-page-header'>
          <h1>Price Enquiries</h1>
          <div className='admin-count'>Total: {enquiries.length}</div>
        </div>

        {loading ? (
          <div className='admin-loading'>Loading...</div>
        ) : enquiries.length === 0 ? (
          <div className='admin-empty'>
            <div className='admin-empty-icon'>🧮</div>
            <div className='admin-empty-text'>No price enquiries yet</div>
          </div>
        ) : (
          <div className='admin-table-wrap'>
            <table className='admin-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Subtotal</th>
                  <th>VAT 15%</th>
                  <th>Total</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map(enq => (
                  <tr key={enq._id}>
                    <td>{enq.name}</td>
                    <td>{enq.email}</td>
                    <td>{enq.phone}</td>
                    <td>{enq.productName}</td>
                    <td>{enq.quantity}</td>
                    <td>SAR {enq.unitPrice.toFixed(2)}</td>
                    <td>SAR {enq.subtotal.toFixed(2)}</td>
                    <td>SAR {enq.vat.toFixed(2)}</td>
                    <td style={{ color: '#C9A84C', fontWeight: 600 }}>
                      SAR {enq.total.toFixed(2)}
                    </td>
                    <td>{new Date(enq.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        className='admin-delete-btn'
                        onClick={() => handleDelete(enq._id)}
                      >
                        🗑️
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

export default ViewPriceEnquiries