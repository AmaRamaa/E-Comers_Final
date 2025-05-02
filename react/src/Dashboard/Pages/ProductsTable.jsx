import React, { useEffect, useState } from 'react';
import Table from '../component/Tabel.jsx'; // Corrected path for Table.jsx
import { supabase } from '../../db/supabaseClient.js';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data, error } = await supabase
                    .from('Iphone_Electronic') // Replace with your actual table name
                    .select('*');

                if (error) {
                    console.error('Error fetching products:', error);
                } else {
                    setProducts(data);
                }
            } catch (err) {
                console.error('Unexpected error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Category', accessor: 'category' },
        { header: 'Price', accessor: 'price' },
        { header: 'Stock', accessor: 'stock' },
        { header: 'Description', accessor: 'description' },
        { header: 'Image', accessor: 'images', type: 'image' }, // Assuming 'images' is the field name
    ];

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>Products</h1>
            {products.length > 0 ? (
                <Table columns={columns} data={products} />
            ) : (
                <p>No products available.</p>
            )}
        </>
    );
};

export default Products;