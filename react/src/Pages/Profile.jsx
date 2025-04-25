import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './SignIn'; // Ensure the file is named SignIn.jsx
import SignUp from './SignUp'; // Corrected the typo from SingUp to SignUp

function Profile() {
    return (
        <nav>
            <ul>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
        
    );
}

export default Profile;