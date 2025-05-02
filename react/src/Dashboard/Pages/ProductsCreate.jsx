import React, { useState, useEffect } from "react";
import CardProduct from "../component/CardProduct.jsx";
import { supabase } from "../../db/supabaseClient.js";

const ProductsCreate = () => {
    const [product, setProduct] = useState({
        name: "",
        category: "",
        description: "",
        price: 0,
        discount: 0,
        created_at: new Date().toISOString().split("T")[0],
        images: [],
        stock: 0,
        brand: "",
        colors: [],
        storages: [],
        screenSize: 0,
        cpu: "",
        mainCamera: "",
        frontCamera: "",
        battery: "",
    });

    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [storageOptions, setStorageOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTags = async () => {
            const { data, error } = await supabase.from("Tags").select("*").eq("id", 1);
            if (error) {
                console.error("Error fetching tags:", error);
            } else if (data && data.length > 0) {
                const row = data[0];
                setCategories(Array.isArray(row.category) ? row.category : []);
                setColors(Array.isArray(row.colors) ? row.colors : []);
                setStorageOptions(Array.isArray(row.storage) ? row.storage : []);
            }
        };

        fetchTags();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const newProduct = {
                ...product,
            };

            const { data, error } = await supabase
                .from("Iphone_Electronic")
                .insert([newProduct]);

            if (error) {
                console.error("Error creating product:", error);
            } else {
                console.log("Product created successfully:", data);
                setProduct({
                    name: "",
                    category: "",
                    description: "",
                    price: 0,
                    discount: 0,
                    created_at: new Date().toISOString().split("T")[0],
                    images: [],
                    stock: 0,
                    brand: "",
                    colors: [],
                    storages: [],
                    screenSize: 0,
                    cpu: "",
                    mainCamera: "",
                    frontCamera: "",
                    battery: "",
                });
                
            }
        } catch (err) {
            console.error("Unexpected error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
            <div style={{ padding: "20px", width: "50%" }}>
                <h1 style={{ textAlign: "center" }}>Create Product</h1>
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
                    {Object.keys(product).map((key) => (
                        <div key={key} style={{ marginBottom: "15px" }}>
                            <label htmlFor={key} style={{ display: "block", fontWeight: "bold" }}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}:
                            </label>
                            {key === "category" ? (
                                <select
                                    id={key}
                                    value={product[key]}
                                    onChange={(e) =>
                                        setProduct({ ...product, [key]: e.target.value.toLowerCase() })
                                    }
                                    style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            ) : key === "colors" || key === "storages" ? (
                                <div>
                                    {(key === "colors" ? colors : storageOptions).map((item) => (
                                        <div key={item}>
                                            <input
                                                type="checkbox"
                                                id={`${key}-${item}`}
                                                value={item}
                                                checked={product[key].includes(item)}
                                                onChange={(e) => {
                                                    const values = product[key].includes(item)
                                                        ? product[key].filter((i) => i !== item)
                                                        : [...product[key], item];
                                                    setProduct({ ...product, [key]: values });
                                                }}
                                            />
                                            <label htmlFor={`${key}-${item}`}>{item}</label>
                                        </div>
                                    ))}
                                </div>
                            ) : key === "images" ? (
                                <input
                                    type="text"
                                    id={key}
                                    placeholder={`Comma separated ${key}`}
                                    value={product[key].join(", ").toLowerCase()}
                                    onChange={(e) =>
                                        setProduct({
                                            ...product,
                                            [key]: e.target.value.split(",").map((item) => item.trim()),
                                        })
                                    }
                                    style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
                                />
                            ) : (
                                <input
                                    type={typeof product[key] === "number" ? "number" : "text"}
                                    id={key}
                                    value={typeof product[key] === "string" ? product[key].toLowerCase() : product[key]}
                                    onChange={(e) =>
                                        setProduct({
                                            ...product,
                                            [key]: typeof product[key] === "number"
                                                ? parseFloat(e.target.value)
                                                : e.target.value.toLowerCase(),
                                        })
                                    }
                                    style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
                                />
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            padding: "10px",
                            background: loading ? "#ccc" : "#007BFF",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                        }}
                    >
                        {loading ? "Creating..." : "Create Product"}
                    </button>
                </form>
            </div>
            <div style={{ padding: "20px" }}>
                <h2 style={{ textAlign: "center" }}>Product Preview</h2>
                <CardProduct product={product} setProduct={setProduct} />
            </div>
        </div>
    );
};

export default ProductsCreate;
