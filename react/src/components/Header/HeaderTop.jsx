import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Logo from "../../assets/svg/Logo.svg";

const supabaseUrl = "https://aplcciebyfcylmibwidi.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbGNjaWVieWZjeWxtaWJ3aWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1OTU5MzcsImV4cCI6MjA2MTE3MTkzN30.sWAAVjItcOG-XIFmK0ZeZTa6-Rzy_6K61SZVNBjSoxs";
const supabase = createClient(supabaseUrl, supabaseKey);

const Header = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const {
                    data: { session },
                    error,
                } = await supabase.auth.getSession();
                if (error) {
                    throw error;
                }

                if (!session?.user) {
                    navigate("/signin");
                    return;
                }

                const { email } = session.user;

                const { data: users, error: fetchError } = await supabase
                    .from("Users")
                    .select("adminlevel, username")
                    .eq("email", email)
                    .single();

                if (fetchError || !users) {
                    console.error("Error fetching user or user not found:", fetchError?.message);
                    navigate("/signin");
                    return;
                }

                setUser({
                    name: users.username || "User",
                    email: email,
                    adminLevel: users.adminlevel,
                });
            } catch (error) {
                console.error("Error fetching user:", error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, [navigate]);

    const getLinkClass = (path) =>
        location.pathname === path ? "text-dark fw-bold" : "text-muted";

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
        <header
            className="bg-white shadow-sm"
            style={{
                position: "sticky",
                top: "0",
                zIndex: "1000",
            }}
        >
            <div className="container d-flex align-items-center justify-content-between py-2">
                <div className="d-flex align-items-center">
                    <h1 className="m-0" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                        <img src={Logo} alt="Logo" style={{ height: "40px" }} />
                    </h1>
                </div>

                <div className="flex-grow-1 mx-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        style={{
                            borderRadius: "20px",
                            backgroundColor: "#f8f9fa",
                            border: "none",
                            padding: "0.5rem 1rem",
                        }}
                    />
                </div>

                <nav className="d-flex align-items-center">
                    <NavLink to="/" className={`mx-3 text-decoration-none ${getLinkClass("/")}`}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={`mx-3 text-decoration-none ${getLinkClass("/about")}`}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={`mx-3 text-decoration-none ${getLinkClass("/contact")}`}>
                        Contact Us
                    </NavLink>
                    <NavLink to="/blog" className={`mx-3 text-decoration-none ${getLinkClass("/blog")}`}>
                        Blog
                    </NavLink>
                </nav>

                <div className="d-flex align-items-center">
                    <FaHeart className="mx-3 text-dark" size={20} />
                    <FaShoppingCart className="mx-3 text-dark" size={20} />
                    <NavLink to="/profile">
                        <FaUser className="mx-3 text-dark" size={20} />
                    </NavLink>
                </div>

                {/* Admin Button */}
                {user?.adminLevel >= 4 && (
                    <button
                        className="btn btn-primary ms-3"
                        onClick={() => navigate("/dashboard")}
                    >
                        Admin Panel
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
