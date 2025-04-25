import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSuccess = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Login Successful!</h1>
            <p style={styles.message}>Welcome back! You have successfully logged in.</p>
            <button style={styles.button} onClick={handleGoHome}>
                Go to Homepage
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',   
        height: '100vh',
        backgroundColor: '#f0f8ff',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2rem',
        color: '#4caf50',
    },
    message: {
        fontSize: '1.2rem',
        margin: '1rem 0',
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#4caf50',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default LoginSuccess;