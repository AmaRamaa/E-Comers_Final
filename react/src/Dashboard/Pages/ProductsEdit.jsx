import React, { useEffect, useState } from "react";
import { supabase } from "../../db/supabaseClient.js";

const ProductsEdit = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data, error } = await supabase
                    .from("Iphone_Electronic")
                    .select("*");

                if (error) {
                    console.error("Error fetching products:", error);
                } else {
                    setProducts(data);
                }
            } catch (err) {
                console.error("Unexpected error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditingProduct({ ...editingProduct, [name]: value });
    };

    const handleSave = async () => {
        try {
            const { data, error } = await supabase
                .from("Iphone_Electronic")
                .update(editingProduct)
                .eq("id", editingProduct.id);

            if (error) {
                console.error("Error updating product:", error);
            } else {
                console.log("Product updated successfully:", data);
                setProducts((prevProducts) =>
                    prevProducts.map((product) =>
                        product.id === editingProduct.id ? editingProduct : product
                    )
                );
                setEditingProduct(null);
            }
        } catch (err) {
            console.error("Unexpected error:", err);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (!confirmDelete) {
            return;
        }

        try {
            const { error } = await supabase
                .from("Iphone_Electronic")
                .delete()
                .eq("id", id);

            if (error) {
                console.error("Error deleting product:", error);
            } else {
                console.log("Product deleted successfully");
                setProducts((prevProducts) =>
                    prevProducts.filter((product) => product.id !== id)
                );
            }
        } catch (err) {
            console.error("Unexpected error:", err);
        }   
    };


    if (loading) {
        return <p className="text-center mt-5">Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Products Edit</h1>
            {products.length > 0 ? (
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <button
                                        className="btn btn-primary btn-sm mr-2"
                                        onClick={() => handleEdit(product)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">No products available.</p>
            )}

            {editingProduct && (
                <div className="mt-4">
                    <h2>Edit Product</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSave();
                        }}
                        className="p-3 border rounded"
                    >
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={editingProduct.name}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Category:</label>
                            <input
                                type="text"
                                name="category"
                                value={editingProduct.category}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                            <input
                                type="number"
                                name="price"
                                value={editingProduct.price}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Stock:</label>
                            <input
                                type="number"
                                name="stock"
                                value={editingProduct.stock}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-success mr-2">
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setEditingProduct(null)}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ProductsEdit;