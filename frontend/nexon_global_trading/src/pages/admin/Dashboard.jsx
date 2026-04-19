import React from 'react'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if(!token) {
      navigate('/manage')
    }
  }, [])


  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/manage')
  }

  const menuItems = [
    {
      title: 'Categories',
      items: [
        { label: 'View Categories', path: '/admin/categories', icon: '👁️'},
        { label: 'Add Category', path: '/admin/categories/add', icon: '➕'},
      ]
    },

    {
      title: 'Products',
      items: [
        {label: 'View Products', path: '/admin/products', icon: '📦'},
        {label: 'Add Product', path: '/admin/products/add', icon: '➕'},
      ]
    },

    {
      title: 'Services',
      items: [
        {label: 'View Services', path: '/admin/services', icon: '🛠️'},
        {label: 'Add Service', path: '/admin/services/add', icon: '➕'},
      ]
    },

    {
      title: 'Enquiries & Feedback',
      items: [
        {label: 'View Enquiries', path: '/admin/enquiries', icon: '📩'},
        {label: 'View Feedback', path: '/admin/feedback', icon: '📝'},
      ]
    }
  ]

  return (

    <div className='dashboard'>

      {/*SIDEBAR */}
      <div className='dashboard-sidebar'>

        <div className='dashboard-logo'>

          <div className='dashboard-logo-name'>Nexon Global Trading</div>
          <div className='dashboard-logo-sub'>Admin Dashboard</div>
        </div>


        <nav className='dashboard-nav'>

          {menuItems.map((group, index) => (
            <div key={index} className='dashboard-nav-group'>

              <div className='dashboard-nav-group-title'>{group.title}</div>

              {group.items.map((item, i) => (
                <Link key={i} to={item.path} className='dashboard-nav-item'>

                  <span className='dashboard-nav-icon'>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <button className='dashboard-logout' onClick={handleLogout}>Logout</button>
      </div>


      {/* MAIN */}
      <div className='dashboard-main'>

         {/* TOP BAR */}
        <div className='dashboard-topbar'>
          <div className='dashboard-topbar-title'>Welcome Back, Admin!</div>
          <div className='dashboard-topbar-sub'>
            Nexon Global Trading Management Portal
          </div>
        </div>

        {/* QUICK ACCESS CARDS */}
        <div className='dashboard-cards'>
          {menuItems.map((group, index) => (
            <div key={index} className='dashboard-card-group'>
              <div className='dashboard-card-group-title'>{group.title}</div>
              <div className='dashboard-card-group-items'>
                {group.items.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className='dashboard-card'
                  >
                    <div className='dashboard-card-icon'>{item.icon}</div>
                    <div className='dashboard-card-label'>{item.label}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
