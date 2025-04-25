import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { supabase } from '../db/supabaseClient';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = form;

        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (loginError) {
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-danger position-fixed top-50 start-50 translate-middle';
            alertDiv.role = 'alert';
            alertDiv.style.zIndex = '1050';
            alertDiv.textContent = `Error logging in: ${loginError.message}`;
            document.body.appendChild(alertDiv);

            setTimeout(() => {
            alertDiv.remove();
            }, 5000);
        } else {
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-success position-fixed top-50 start-50 translate-middle';
            alertDiv.role = 'alert';
            alertDiv.style.zIndex = '1050';
            alertDiv.textContent = 'Login successful!';
            document.body.appendChild(alertDiv);

            setTimeout(() => {
            alertDiv.remove();
            }, 5000);
        }
    };

    const onChange = (e) => {
        const { id, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [id]: value,
        }));
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <h1 className="text-center mb-4" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Login
            </h1>
            <form onSubmit={handleSubmit} style={{ border: '1px dashed #123ddd', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{ fontWeight: '500' }}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        className="form-control"
                        value={form.email}
                        onChange={onChange}
                        style={{ borderRadius: '8px', padding: '10px' }}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{ fontWeight: '500' }}>
                        Password
                    </label>
                    <div className="input-group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="Enter Password"
                            className="form-control"
                            value={form.password}
                            onChange={onChange}
                            style={{ borderRadius: '8px 0 0 8px', padding: '10px' }}
                            required
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={togglePasswordVisibility}
                            style={{ borderRadius: '0 8px 8px 0' }}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" style={{ borderRadius: '8px', padding: '10px' }}>
                        Login
                    </button>
                </div>
            </form>
            <div className="text-center mt-3">
                <Link to="/forgot-password" className="text-decoration-none" style={{ color: '#007bff' }}>
                    Forgot Password?
                </Link>
            </div>
            <div className="text-center mt-3">
                <Link to="/signup" className="text-decoration-none" style={{ color: '#007bff' }}>
                    Create an Account
                </Link>
            </div>
        </div>
    );
};

export default Login;