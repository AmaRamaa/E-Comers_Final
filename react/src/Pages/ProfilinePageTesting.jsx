import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aplcciebyfcylmibwidi.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbGNjaWVieWZjeWxtaWJ3aWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1OTU5MzcsImV4cCI6MjA2MTE3MTkzN30.sWAAVjItcOG-XIFmK0ZeZTa6-Rzy_6K61SZVNBjSoxs'; 
const supabase = createClient(supabaseUrl, supabaseKey);

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data: { user }, error } = await supabase.auth.getUser();
                
                if (error) {
                    throw error;
                }
                if (!user) {
                    setError('No user logged in.');
                    setLoading(false);
                    return;
                }

                console.log('Authenticated User:', user);

                // User object contains id, email, etc.
                setProfile({
                    id: user.id,
                    email: user.email,
                    phone: user.phone || 'N/A',
                });
            } catch (error) {
                console.error('Error fetching profile:', error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            {profile ? (
                <div>
                    <p><strong>User ID:</strong> {profile?.id}</p>
                    <p><strong>Email:</strong> {profile?.email}</p>
                    <p><strong>Phone:</strong> {profile?.phone}</p>
                </div>
            ) : (
                <p>No profile found.</p>
            )}
        </div>
    );
};

export default Profile;
