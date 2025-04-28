import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">iPhones That Redefine Premium</h1>
          <p className="lead">Explore the latest iPhones at unbeatable prices.</p>
          <a href="/shop" className="btn btn-dark px-4 py-2 mt-3">
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured iPhones</h2>
          <div className="row g-4">
            {[1, 2, 3].map((id) => (
              <div className="col-md-4" key={id}>
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src="placeholder.jpg"
                    className="card-img-top"
                    alt={`iPhone ${id}`}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">iPhone {14 + id} Pro</h5>
                    <p className="card-text text-muted">$999</p>
                    <a href="/product" className="btn btn-outline-dark w-100">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="fw-bold">Limited Time Offer</h2>
          <p className="mb-4">Get up to 20% off on select models.</p>
          <a href="/offers" className="btn btn-light">
            View Offers
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Shop by Category</h2>
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded">
                <h5>iPhone 14 Series</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded">
                <h5>iPhone 13 Series</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded">
                <h5>Accessories</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
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

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-1">&copy; 2025 iPhone Store. All rights reserved.</p>
          <small>Made with ❤️ by Amar</small>
        </div>
      </footer>
    </div>
  );
};

export default Home;
