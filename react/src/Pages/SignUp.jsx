import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import 'bootstrap/dist/css/bootstrap.min.css';
import { supabase } from '../db/supabaseClient';
import './SignUp.css';

const SignUp = () => {
    const [form, setForm] = useState({name: '', email: '', phone: '', password: ''});


    const [showPassword, setShowPassword] = useState(false);
    // Removed unused state variables

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(e);
        console.log({ name: form.name, email: form.email, phone: form.phone, password: form.password });
        const { name, email, phone, password } = form;
        const { data: signUpData, error: signUpError } = 
        await supabase.auth.signUp(
            { email, password },
            { data: { name, phone } }
        );

        if (signUpError) {
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-danger position-fixed top-50 start-50 translate-middle';
            alertDiv.role = 'alert';
            alertDiv.style.zIndex = '1050';
            alertDiv.textContent = `Error signing up: ${signUpError.message}`;
            document.body.appendChild(alertDiv);

            setTimeout(() => {
            alertDiv.remove();
            }, 5000);
        } else {
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-success position-fixed top-50 start-50 translate-middle';
            alertDiv.role = 'alert';
            alertDiv.style.zIndex = '1050';
            alertDiv.textContent = 'Sign-up successful!';
            document.body.appendChild(alertDiv);

            setTimeout(() => {
            alertDiv.remove();
            }, 1000);
        }
    };

    const onChange = (e) => {
        if (typeof e === 'string') {
            // Handle PhoneInput change
            setForm((prevForm) => ({
                ...prevForm,
                phone: e,
            }));
        } else {
            const { id, value } = e.target;
            setForm((prevForm) => ({
                ...prevForm,
                [id]: value,
            }));
        }
    };


    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <h1 className="text-center mb-4" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Create Your Account
            </h1>
            <form onSubmit={handleSubmit} style={{ border: '1px dashed #123ddd', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{ fontWeight: '500' }}>
                        Username
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Username"
                        className="form-control"
                        value={form.name}
                        onChange={onChange}
                        style={{ borderRadius: '8px', padding: '10px' }}
                        required
                    />
                </div>
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
                    <label htmlFor="phone" className="form-label" style={{ fontWeight: '500' }}>
                        Phone Number
                    </label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={form.phone}
                        onChange={onChange}
                        defaultCountry="XK"
                        style={{ borderRadius: '8px', padding: '10px' }}
                        required
                        // className='form-control'
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{ fontWeight: '500' }}>
                        Password
                    </label>
                    <div className="input-group">
                        <input
                            id="password"
                            name="password"
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
                        Sign Up
                    </button>
                </div>
            </form>
            <div className="text-center mt-3">
                <Link to="/signin" className="text-decoration-none" style={{ color: '#007bff' }}>
                    Sign In Instead
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
