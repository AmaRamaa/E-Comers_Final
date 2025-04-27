import React from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

function Profile() {
    const userEmail = localStorage.getItem('userEmail'); // Assuming userEmail is stored in localStorage
    const [userData, setUserData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const SUPABASE_URL = "https://aplcciebyfcylmibwidi.supabase.co";
        const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbGNjaWVieWZjeWxtaWJ3aWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1OTU5MzcsImV4cCI6MjA2MTE3MTkzN30.sWAAVjItcOG-XIFmK0ZeZTa6-Rzy_6K61SZVNBjSoxs";
        const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        const fetchUserByEmail = async (email) => {
            const { data, error } = await supabase
                .from('profiles') // Query the profiles table
                .select('*')
                .eq('email', email) // Filter by email
                .single(); // Get a single record

            if (error) {
                console.error('Error fetching user:', error);
                setError(error.message);
                return null;
            }

            return data;
        };

        if (userEmail && userEmail.includes('@')) {
            fetchUserByEmail(userEmail).then((data) => {
                setLoading(false);
                if (data) {
                    setUserData(data);
                } else {
                    setError('User not found');
                }
            });
        } else {
            setLoading(false);
        }
    }, [userEmail]);

    if (!userEmail || !userEmail.includes('@')) {
        return (
            <nav>
                <ul>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        );
    }

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Welcome to your Profile</h1>
            <p>Username: {userData.username}</p>
            <p>Phone: {userData.phone}</p>
            <p>Email: {userEmail}</p>
        </div>
    );
}

export default Profile;