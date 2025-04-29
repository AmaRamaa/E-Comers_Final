import React from 'react';
import productData from '../../data/Products/Products.js'; // Ensure the path is correct
import CardProduct from '../CardProduct.jsx';

const Products2 = () => {
    const data = productData;

    return (
        <>
            <h1>Products</h1>
            <div style={styles.container}>
                {data.map((product, index) => (
                    <CardProduct key={index} product={product} />
                ))}
            </div>
        </>
    );
};

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
    },
};

export default Products2;