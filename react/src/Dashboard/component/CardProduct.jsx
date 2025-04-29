import React from "react";

const CardProduct = ({ product }) => {
    return (
        <div style={styles.card}>
            <div style={styles.imageContainer}>
                <img src={product.image} alt={product.name} style={styles.image} />
                <div style={styles.overlay}></div>
            </div>
            <div style={styles.content}>
                <h2 style={styles.title}>{product.name}</h2>
                <p style={styles.category}>{product.category}</p>
                <p style={styles.description}>{product.description}</p>
                <p style={styles.price}>${product.price.toFixed(2)}</p>
                <p style={{ ...styles.stock, color: product.stock > 0 ? "#28a745" : "#dc3545" }}>
                    {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                </p>
                <button
                    style={{ ...styles.button, opacity: product.stock > 0 ? 1 : 0.6 }}
                    disabled={product.stock === 0}
                >
                    {product.stock > 0 ? "See More" : "Sold Out"}
                </button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: "12px",
        overflow: "hidden",
        width: "320px",
        margin: "16px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        transition: "transform 0.3s, box-shadow 0.3s",
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        height: "220px",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0,
        transition: "transform 0.3s",
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
        zIndex: 1,
    },
    content: {
        padding: "20px",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: "1.6rem",
        margin: "0 0 10px",
        fontWeight: "600",
        color: "#333",
    },
    category: {
        fontSize: "1rem",
        color: "#888",
        margin: "0 0 10px",
    },
    description: {
        fontSize: "0.95rem",
        color: "#666",
        margin: "0 0 16px",
        lineHeight: "1.5",
    },
    price: {
        fontSize: "1.4rem",
        fontWeight: "bold",
        margin: "0 0 10px",
        color: "#28a745",
    },
    stock: {
        fontSize: "0.95rem",
        margin: "0 0 16px",
        fontWeight: "500",
    },
    button: {
        padding: "12px 20px",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "background-color 0.3s, transform 0.3s",
    },
    cardHover: {
        transform: "scale(1.05)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
};

export default CardProduct;