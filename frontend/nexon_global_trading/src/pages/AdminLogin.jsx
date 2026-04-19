import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdminLogin.css'

function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('https://nexon-global-trading-backend1.onrender.com/api/auth/login', formData)

      if (res.data.success) {
        localStorage.setItem('adminToken', res.data.token)
        navigate('/admin/dashboard')
      }
    }
    catch(error) {
      setError('Invalid username or password. Please try again.')
    }
    setLoading(false)
  }


  return (
    <div className='admin-login'>

      {/* BACKGROUND */}
      <div className='admin-login-bg'></div>
      <div className='admin-login-pattern'></div>


      {/* CARD */}
      <div className='admin-login-card'>

        { /* HEADER */}
        <div className='admin-login-header'>
          <div className='admin-login-logo'>Nexon Global Trading</div>
          <div className='admin-login-sub'>Admin Portal</div>
        </div>

        { /* FORM */ }
        <form className='admin-login-title' onSubmit={handleSubmit}>

          <div className='admin-login-title'>Sign In</div>
          <div className='admin-login-desc'>
            Enter your credentials to access the dashboard
          </div>

          {error && (
            <div className='admin-login-error'>
              ⬆️ {error}
            </div>
          )}


          <div className='admin-login-field'>
            <label>Username</label>
            <input type='text' name='username' 
            placeholder='Enter username' 
            value={formData.username}
            onChange={handleChange} 
            required />
          </div>

          <div className='admin-login-field'>
            <label>Password</label>
            <input type='password' name='password' placeholder='Enter password'
            value={formData.password} 
            onChange={handleChange} 
            required />
          </div>

          <button type='submit' className='admin-login-btn' disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/*FOOTER*/}

        <div className='admin-login-footer'>
          A Nexon Global Trading Branch
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
