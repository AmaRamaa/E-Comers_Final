import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';

const supabaseUrl = 'https://aplcciebyfcylmibwidi.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbGNjaWVieWZjeWxtaWJ3aWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1OTU5MzcsImV4cCI6MjA2MTE3MTkzN30.sWAAVjItcOG-XIFmK0ZeZTa6-Rzy_6K61SZVNBjSoxs'; 
const supabase = createClient(supabaseUrl, supabaseKey);

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data: { session }, error } = await supabase.auth.getSession();
                if (error) {
                    throw error;
                }
                const user = session?.user;
                
                if (!user) {
                    setError('No user logged in.');
                    setLoading(false);
                    navigate('/signin'); // Redirect to Sign-In page
                    return;
                }

                console.log('Authenticated User:', user);

                // Extract user metadata
                const { user_metadata } = user;

                setProfile({
                    id: user.id,
                    email: user.email,
                    phone: user_metadata.phone || 'N/A',
                    name: user_metadata.name || 'N/A', // Corrected this line
                    emailVerified: user_metadata?.email_verified ? 'Yes' : 'No',
                    phoneVerified: user_metadata?.phone_verified ? 'Yes' : 'No',
                });
                
            } catch (error) {
                console.error('Error fetching profile:', error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]); // Add navigate as a dependency

    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                throw error;
            }
            alert('You have been logged out.');
            setProfile(null); // Clear the profile state
            navigate('/signin'); // Redirect to Sign-In page after logout
        } catch (error) {
            console.error('Error logging out:', error.message);
            alert('Error logging out: ' + error.message);
        }
    };

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger text-center mt-5">Error: {error}</div>;
    }

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h1 className="text-center">{profile?.name}</h1>
                </div>
                <div className="card-body">
                    {profile ? (
                        <div className="text-center">
                            <p><strong>User ID:</strong> {profile?.id}</p>
                            <p>
                                <strong>Email:</strong> {profile?.email}{' '}
                                {profile?.emailVerified === 'Yes' && (
                                    <span className="text-success">&#10003;</span>
                                )}
                            </p>
                            <p>
                                <strong>Phone:</strong> {profile?.phone}{' '}
                                {profile?.phoneVerified === 'Yes' && (
                                    <span className="text-success">&#10003;</span>
                                )}
                            </p>

                            <button 
                                className="btn btn-danger mt-3" 
                                onClick={handleLogout}
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <p className="text-center">No profile found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
