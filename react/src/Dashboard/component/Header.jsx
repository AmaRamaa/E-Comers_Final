import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const supabaseUrl = 'https://aplcciebyfcylmibwidi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbGNjaWVieWZjeWxtaWJ3aWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1OTU5MzcsImV4cCI6MjA2MTE3MTkzN30.sWAAVjItcOG-XIFmK0ZeZTa6-Rzy_6K61SZVNBjSoxs';
const supabase = createClient(supabaseUrl, supabaseKey);

const Header = () => {
    const [user, setUser] = useState(null); // Used to store user details
    const [isLoading, setIsLoading] = useState(true); // Used to track loading state
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data: { session }, error } = await supabase.auth.getSession();
                if (error) {
                    throw error;
                }

                if (!session?.user) {
                    navigate('/signin'); // Redirect to Sign-In page if not authenticated
                    return;
                }

                const { email } = session.user;

                // Fetch user from the "Users" table
                const { data: users, error: fetchError } = await supabase
                    .from('Users')
                    .select('adminlevel, username')
                    .eq('email', email)
                    .single();

                if (fetchError || !users) {
                    console.error('Error fetching user or user not found:', fetchError?.message);
                    navigate('/signin'); // Redirect if user not found
                    return;
                }

                if (users.adminlevel < 4) {
                    console.warn('User does not have sufficient admin level');
                    navigate('/not-found'); // Redirect if admin level is insufficient
                    return;
                }

                setUser({
                    name: users.username || 'User',
                    email: email,
                    status: 'Online', // Example status
                });
            } catch (error) {
                console.error('Error fetching user:', error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, [navigate]);

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center p-3 bg-light">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-between align-items-center p-3 bg-light">
            <div className="d-flex flex-column">
                <span className="text-success">Welcome, {user?.name || 'User'}!</span>
                <span className="text-muted fst-italic">Email: {user?.email || 'N/A'}</span>
            </div>
            <div className="d-flex flex-column align-items-end">
                <img
                    src={`https://picsum.photos/seed/${Math.random()}/300/300`}
                    alt="User Avatar"
                    className="rounded-circle mb-2"
                    style={{ width: '40px', height: '40px' }}
                />
                <span className="fw-bold text-dark">{user?.name || 'User'}</span>
                <span className="text-secondary">{user?.status || 'N/A'}</span>
            </div>
        </div>
    );
};

export default Header;