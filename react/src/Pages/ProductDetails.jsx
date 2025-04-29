import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  useParams(); // Get the product ID from the URL
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
      setProduct(JSON.parse(storedProduct));
    }
  }, []);
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Product Images */}
        <div>
          <img
            src={`/${selectedColor}-iphone.png`}
            alt={product.name}
            style={{ width: "300px", borderRadius: "10px" }}
          />
          {/* <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            {product.colors.map((color) => (
              <img
                key={color}
                src={`/${color}-iphone-thumbnail.png`}
                alt={color}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border: selectedColor === color ? "2px solid black" : "none",
                }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div> */}
        </div>

        {/* Product Details */}
        <div>
          <h1>{product.name}</h1>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            ${product.price}{" "}
            <span style={{ textDecoration: "line-through" }}>${product.originalPrice}</span>
          </p>
          <p>Select color:</p>
          <div style={{ display: "flex", gap: "10px" }}>
            {/* {product.colors.map((color) => (
              <button
                key={color}
                style={{
                  backgroundColor: color,
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: selectedColor === color ? "2px solid black" : "none",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedColor(color)}
              ></button>
            ))} */}
          </div>
          <p>Select storage:</p>
          {/* <div style={{ display: "flex", gap: "10px" }}>
            {product.storages.map((storage) => (
              <button
                key={storage}
                style={{
                  padding: "10px 20px",
                  border: selectedStorage === storage ? "2px solid black" : "1px solid gray",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedStorage(storage)}
              >
                {storage}
              </button>
            ))}
          </div> */}
          <div style={{ marginTop: "20px" }}>
            <p>Screen size: {product.screenSize}</p>
            <p>CPU: {product.cpu}</p>
            <p>Main camera: {product.mainCamera}</p>
            <p>Front camera: {product.frontCamera}</p>
            <p>Battery capacity: {product.battery}</p>
          </div>
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button style={{ padding: "10px 20px", backgroundColor: "gray", color: "white" }}>
              Add to Cart
            </button>
            <button style={{ padding: "10px 20px", backgroundColor: "gray", color: "white" }}>
              Add to Wishlist
            </button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>Free Delivery: {product.delivery}</p>
            <p>In Stock: {product.stock}</p>
            <p>Guaranteed: {product.guarantee}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;