import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Products2 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/products'); // Use the correct route path
    }, [navigate]);

    return null; // No UI is rendered since it redirects immediately
};

export default Products2;