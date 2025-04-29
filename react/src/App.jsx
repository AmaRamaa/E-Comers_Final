import Header from './components/Header/DekstopHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/products/:categoryName" element={<Products category="phones" />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/#" element={<LoginSuccess />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;