import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    price: 0,
    originalPrice: 0,
    colors: [],
    storages: [],
    screenSize: "",
    cpu: "",
    mainCamera: "",
    frontCamera: "",
    battery: "",
    delivery: "",
    stock: "",
    guarantee: "",
  });

  
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");

  useEffect(() => {
    // Fetch product from localStorage
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      const parsedProduct = JSON.parse(storedProduct);
      if (parsedProduct && parsedProduct.id === id) {
        console.log(parsedProduct.colors, parsedProduct.storages);
        setSelectedColor(parsedProduct.colors?.[0] || ""); // Default to first color if available
        setSelectedStorage(parsedProduct.storages?.[0] || ""); // Default to first storage if available
        setProduct({
          ...parsedProduct,
          colors: ["red", "blue", "green"], // Default colors if empty
          storages:["64GB", "128GB", "256GB"], // Default storages if empty
        });
      }
    }
  }, [id]);
  

  const placeholderImage = "/placeholder-image.png"; // Path to your placeholder image

  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* Product Images */}
        <div className="col-md-4 text-center">
          <img
            src={selectedColor ? `/${selectedColor}-iphone.png` : placeholderImage}
            alt={product.name || "Product"}
            className="img-fluid"
          />
        </div>

          <div className="col-md-8">
            <h1 className="h4 mb-3">{product.name || "Product Name"}</h1>
            <p className="h5 text-primary mb-3">
              ${product.price}{" "}
              {product.originalPrice > product.price && (
                <span className="text-muted text-decoration-line-through ms-2">
            ${product.originalPrice}
                </span>
              )}
            </p>

            {/* Color Selection */}
            <p className="fw-bold mb-2">Select color:</p>
            <div className="d-flex gap-2 mb-4">
              {Array.isArray(product.colors) &&
                product.colors.map((color) => (
            <button
              key={color}
              className={`btn rounded-circle p-0 border ${
                selectedColor === color ? "border-primary" : "border-secondary"
              }`}
              style={{
                backgroundColor: color,
                width: "40px",
                height: "40px",
              }}
              onClick={() => setSelectedColor(color)}
            ></button>
                ))}
            </div>

            {/* Storage Selection */}
            <p className="fw-bold mb-2">Select storage:</p>
            <div className="d-flex gap-2 mb-4">
              {Array.isArray(product.storages) &&
                product.storages.map((storage) => (
            <button
              key={storage}
              className={`btn ${
                selectedStorage === storage ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => setSelectedStorage(storage)}
            >
              {storage}
            </button>
                ))}
            </div>

            <div className="mb-4">
              <p>Screen size: {product.screenSize || "N/A"}</p>
              <p>CPU: {product.cpu || "N/A"}</p>
              <p>Main camera: {product.mainCamera || "N/A"}</p>
              <p>Front camera: {product.frontCamera || "N/A"}</p>
              <p>Battery capacity: {product.battery || "N/A"}</p>
            </div>
            <div className="d-flex gap-2 mb-4">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-secondary">Add to Wishlist</button>
            </div>
            <div>
              <p>Free Delivery: {product.delivery || "N/A"}</p>
              <p>In Stock: {product.stock || "N/A"}</p>
              <p>Guaranteed: {product.guarantee || "N/A"}</p>
            </div>
          </div>
              </div>

      <div className="mt-5">
        <h2 className="h5 mb-4">Details</h2>
        <p>{product.description}</p>
        <div>
          <h3 className="h6 mb-3">Screen</h3>
          <p>Screen diagonal: {product.screenSize || "N/A"}</p>
          <p>The screen resolution: {product.screenResolution || "N/A"}</p>
          <p>The screen refresh rate: {product.screenRefreshRate || "N/A"}</p>
          <p>The pixel density: {product.pixelDensity || "N/A"}</p>
          <p>Screen type: {product.screenType || "N/A"}</p>
          <p>Additionally: {product.additionalScreenFeatures?.join(", ") || "N/A"}</p>
        </div>
        <div className="mt-4">
          <h3 className="h6 mb-3">CPU</h3>
          <p>CPU: {product.cpu || "N/A"}</p>
          <p>Number of cores: {product.cpuCores || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
