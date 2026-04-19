import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import QuickConnect from './components/QuickConnect';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import DashBoard from './pages/admin/Dashboard';
import ViewCategories from './pages/admin/ViewCategories';
import AddCategory from './pages/admin/AddCategory';
import EditCategory from './pages/admin/EditCategory';
import ViewProducts from './pages/admin/ViewProducts';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import ViewServices from './pages/admin/ViewServices';
import AddService from './pages/admin/AddService';
import EditService from './pages/admin/EditService';
import ViewEnquiries from './pages/admin/ViewEnquiries';
import ViewFeedback from './pages/admin/ViewFeedback';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <QuickConnect />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

      {/* ADmin Routes */}
      <Route path='/manage' element={<AdminLogin />} />
      <Route path='/admin/dashboard' element={<DashBoard />} />
      <Route path='/admin/categories' element={<ViewCategories />} />
      <Route path='/admin/categories/add' element={<AddCategory />} />
      <Route path='/admin/categories/edit/:id' element={<EditCategory />} />
      <Route path='/admin/products' element={<ViewProducts />} />
      <Route path='/admin/products/add' element={<AddProduct />} />
      <Route path='/admin/products/edit/:id' element={<EditProduct />} />
      <Route path='/admin/services' element={<ViewServices />} />
      <Route path='/admin/services/add' element={<AddService />} />
      <Route path='/admin/services/edit/:id' element={<EditService />} />
      <Route path='/admin/enquiries' element={<ViewEnquiries />} />
      <Route path='/admin/feedback' element={<ViewFeedback />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App