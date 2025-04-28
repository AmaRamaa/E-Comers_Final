import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Logo from "../../assets/svg/Logo.svg";

const Header = () => {
    const location = useLocation();

    const getLinkClass = (path) => (
        location.pathname === path ? "text-dark fw-bold" : "text-muted"
    );

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

                {/* Search Bar */}
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

                {/* Navigation Links */}
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

                {/* Icons */}
                <div className="d-flex align-items-center">
                    <FaHeart className="mx-3 text-dark" size={20} />
                    <FaShoppingCart className="mx-3 text-dark" size={20} />
                    <NavLink to="/profile">
                        <FaUser className="mx-3 text-dark" size={20} />
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
