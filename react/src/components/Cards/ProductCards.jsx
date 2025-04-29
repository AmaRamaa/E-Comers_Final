import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ name, price, SeeMore, image }) => {
    return (
        <div
            className="card text-center shadow-sm"
            style={{
                width: '18rem',
                borderRadius: '12px',
                margin: '10px',
                border: 'none',
                backgroundColor: '#f8f9fa',
            }}
        >
            <div className="card-header bg-transparent border-0 text-end">
                <button
                    className="btn btn-outline-secondary btn-sm"
                    style={{ borderRadius: '50%' }}
                >
                    <i className="bi bi-heart"></i>
                </button>
            </div>
            <img
                src={image} // Placeholder image
                alt={name}
                className="card-img-top mx-auto"
                style={{
                    width: '150px',
                    height: 'auto',
                    borderRadius: '8px',
                }}
            />
            <div className="card-body">
                <h6 className="card-title fw-bold">{name}</h6> {/* Dynamic name */}
                <p className="card-text text-dark fs-5 fw-bold">${price}</p> {/* Dynamic price */}
                <button className="btn btn-dark w-100" onClick={SeeMore}>
                    See More
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
