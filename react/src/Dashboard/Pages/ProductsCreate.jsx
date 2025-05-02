import React, { useState } from "react";
import CardProduct from "../component/CardProduct.jsx"; // Update the path to the correct location of CardProduct
import { supabase } from "../../db/supabaseClient.js"; // Import Supabase client

const ProductsCreate = () => {
    const [product, setProduct] = useState({
        name: "",
        category: "",
        description: "",
        price: 0,
        stock: 0,
        images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png"],
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const newProduct = {
                ...product,
            };

            const { data, error } = await supabase
                .from("Iphone_Electronic") // Ensure this matches your actual table name in Supabase
                .insert([newProduct]);

            if (error) {
                console.error("Error creating product:", error);
            } else {
                console.log("Product created successfully:", data);
                // Reset the form after successful creation
                setProduct({
                    name: "",
                    category: "",
                    description: "",
                    price: 0,
                    stock: 0,
                    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png",
                });
            }
        } catch (err) {
            console.error("Unexpected error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
                <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", width: "50%" }}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
                <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", width: "50%" }}>
                    <h1 style={{ textAlign: "center", color: "#333" }}>Create Product</h1>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            maxWidth: "600px",
                            margin: "0 auto",
                            background: "#f9f9f9",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <div style={{ marginBottom: "15px" }}>
                            <label
                                htmlFor="productName"
                                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
                            >
                                Product Name:
                            </label>
                            <input
                                type="text"
                                id="productName"
                                name="productName"
                                value={product.name}
                                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <div style={{ marginBottom: "15px" }}>
                                <label
                                    htmlFor="productCategory"
                                    style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
                                >
                                    Product Category:
                                </label>
                                <select
                                    id="productCategory"
                                    name="productCategory"
                                    value={product.category}
                                    onChange={(e) => setProduct({ ...product, category: e.target.value })}
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <option value="">Select a category</option>
                                    <option value="phones">Phones</option>
                                    <option value="computers">Computers</option>
                                    <option value="smart watches">Smart Watches</option>
                                    <option value="cameras">Cameras</option>
                                    <option value="headphones">Headphones</option>
                                </select>
                            </div>

                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label
                                htmlFor="productDescription"
                                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
                            >
                                Product Description:
                            </label>
                            <textarea
                                id="productDescription"
                                name="productDescription"
                                value={product.description}
                                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    resize: "vertical",
                                }}
                            ></textarea>
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label
                                htmlFor="productPrice"
                                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
                            >
                                Product Price:
                            </label>
                            <input
                                type="number"
                                id="productPrice"
                                name="productPrice"
                                value={product.price}
                                onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label
                                htmlFor="productStock"
                                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
                            >
                                Product Stock:
                            </label>
                            <input
                                type="number"
                                id="productStock"
                                name="productStock"
                                value={product.stock}
                                onChange={(e) => setProduct({ ...product, stock: parseInt(e.target.value) })}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label
                                htmlFor="productImage"
                                style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
                            >
                                Product Image:
                            </label>
                            <input
                                type="file"
                                id="productImage"
                                name="productImage"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setProduct({ ...product, images: [URL.createObjectURL(file)] });
                                    }
                                }}
                                style={{
                                    display: "block",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "10px",
                                background: loading ? "#ccc" : "#007BFF",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: loading ? "not-allowed" : "pointer",
                            }}
                        >
                            {loading ? "Creating..." : "Create Product"}
                        </button>
                    </form>
                </div>
                <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                    <h2 style={{ textAlign: "center", color: "#333" }}>Product Preview</h2>
                    <CardProduct product={product} />
                </div>
            </div>
        </>
    );
};

export default ProductsCreate;