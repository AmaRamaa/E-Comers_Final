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

function App() {
  // React.useEffect(() => {
  //   localStorage.setItem('userEmail', 'none');
  // }, []);
  return (
    <Router>
      <Header />
        {/* {(() => {
          const navigate = useNavigate();
          return (
            <>
            <Breadcrumb className="bg-light p-3 mb-0">
              <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/about")}>About</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/products")}>Products</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/product-details")}>Product Details</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/shopping-cart")}>Shopping Cart</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/contact")}>Contact</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/blog")}>Blog</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/profile")}>Profile</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/signin")}>Sign In</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/signup")}>Sign Up</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/dashboard")}>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/not-found")}>Not Found</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/#")}>Login Success</Breadcrumb.Item>
            </Breadcrumb>
            </>
          );
        })()} */}

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
        <Route path="/#" element={<LoginSuccess />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        
    </Router>
  );
}

export default App;