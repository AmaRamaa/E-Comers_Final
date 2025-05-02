import Header from './components/Header/DekstopHeader';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import Products from './Pages/Products';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import NotFound from './Pages/NotFound';
import ProductDetails from './Pages/ProductDetails';
import ShoppingCart from './Pages/ShoppingCart';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSuccess from './Pages/LoginSuccess';
import DashboardApp from './Dashboard/DashboardApp.jsx';
import { Breadcrumb } from 'react-bootstrap';
import Footer from './components/Footers/Footer.jsx';



function App() {
  // React.useEffect(() => {
  //   localStorage.setItem('userEmail', 'none');
  // }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categoryName" element={<Products category="categoryName" />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardApp />} />
        <Route path="/dashboard/overview" element={<DashboardApp page="Overview" />} />
        <Route path="/dashboard/analytics" element={<DashboardApp page="Analytics" />} />
        <Route path="/dashboard/inquiries" element={<DashboardApp page="Inquiries" />} />
        <Route path="/dashboard/members" element={<DashboardApp page="Members" />} />
        <Route path="/dashboard/products-store" element={<DashboardApp page="ProductsStore" />} />
        <Route path="/dashboard/products-create" element={<DashboardApp page="ProductsCreate" />} />
        <Route path="/dashboard/products-table" element={<DashboardApp page="ProductsTable" />} />
        <Route path="/dashboard/tags" element={<DashboardApp page="Tags" />} />
        <Route path="/dashboard/tags" element={<DashboardApp page="Tags" />} />
        <Route path="/dashboard/products-edit" element={<DashboardApp page="ProductsEdit" />} />
        <Route path="/#" element={<LoginSuccess />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;