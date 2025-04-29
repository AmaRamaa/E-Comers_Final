import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Iphone14ProMax from "../assets/img/Iphone14ProMax.png"; // Adjust the path as necessary
import ProductCard from "../components/Cards/ProductCards"; // Adjust the path as necessary

const Home = () => {
  return (
    <>
      <section className="bg-dark text-white text-center py-5 hero-section d-flex flex-column align-items-center">
          <div className="container" style={{ width: '50%', maxWidth: '600px' }}>
            <p className="text-uppercase fw-bold mb-2 hero-tagline">Pro.Beyond.</p>
            <h1 className="display-3 fw-bold hero-title">iPhone 14 Pro</h1>
            <p className="lead hero-description">
          Created to change everything for the better. For everyone.
            </p>
            <a href="/shop" className="btn btn-light px-4 py-2 mt-3 hero-button">
          Shop Now
            </a>
          </div>
          <div className="hero-image-wrapper mt-4 d-flex justify-content-center">
            <img
          src={Iphone14ProMax}
          alt="iphone 14 pro max"
          className="img-fluid hero-image"
            />
          </div>
        </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured iPhones</h2>
          <div className="row g-4 d-flex justify-content-center">
            {[1, 2, 3].map((id) => (
              <ProductCard />
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white text-center d-flex flex-column align-items-center">
        <div className="container">
          <h2 className="fw-bold">Limited Time Offer</h2>
          <p className="mb-4">Get up to 20% off on select models.</p>
          <a href="/offers" className="btn btn-light">
            View Offers
          </a>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Shop by Category</h2>
          <div className="row text-center g-4">
            <div className="col-md-4 d-flex flex-column align-items-center">
              <div className="p-4 border rounded">
                <h5>iPhone 14 Series</h5>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <div className="p-4 border rounded">
                <h5>iPhone 13 Series</h5>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <div className="p-4 border rounded">
                <h5>Accessories</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center">
          <h3>Stay Updated</h3>
          <p>Get the latest iPhone deals straight to your inbox.</p>
          <form className="d-flex justify-content-center">
            <input
              type="email"
              className="form-control w-50 me-2"
              placeholder="Enter your email"
            />
            <button className="btn btn-dark">Subscribe</button>
          </form>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-1">&copy; 2025 iPhone Store. All rights reserved.</p>
          <small>Made with ❤️ by Amar</small>
        </div>
      </footer>
    </>
  );
};

export default Home;
