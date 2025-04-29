import React, { useState } from "react";

function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [selectedStorage, setSelectedStorage] = useState("1TB");

  const colors = ["purple", "black", "silver", "gold", "red"];
  const storages = ["128GB", "256GB", "512GB", "1TB"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <nav>
        <p>
          Home &gt; Catalog &gt; Smartphones &gt; Apple &gt; iPhone 14 Pro Max
        </p>
      </nav>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Product Images */}
        <div>
          <img
            src={`/${selectedColor}-iphone.png`}
            alt="iPhone"
            style={{ width: "300px", borderRadius: "10px" }}
          />
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            {colors.map((color) => (
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
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1>Apple iPhone 14 Pro Max</h1>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            $1399 <span style={{ textDecoration: "line-through" }}>$1499</span>
          </p>
          <p>Select color:</p>
          <div style={{ display: "flex", gap: "10px" }}>
            {colors.map((color) => (
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
            ))}
          </div>
          <p>Select storage:</p>
          <div style={{ display: "flex", gap: "10px" }}>
            {storages.map((storage) => (
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
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>Screen size: 6.7"</p>
            <p>CPU: Apple A16 Bionic</p>
            <p>Main camera: 48-12-12 MP</p>
            <p>Front camera: 12 MP</p>
            <p>Battery capacity: 4323 mAh</p>
          </div>
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button style={{ padding: "10px 20px", backgroundColor: "gray", color: "white" }}>
              Add to Wishlist
            </button>
            <button style={{ padding: "10px 20px", backgroundColor: "black", color: "white" }}>
              Add to Cart
            </button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>Free Delivery: 1-2 days</p>
            <p>In Stock: Today</p>
            <p>Guaranteed: 1 year</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;