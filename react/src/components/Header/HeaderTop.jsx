import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Logo from "../../assets/svg/Logo.svg";

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
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
                    <a href="/" className="text-dark mx-3 text-decoration-none" style={{ fontWeight: "500" }}>
                        Home
                    </a>
                    <a href="/about" className="text-muted mx-3 text-decoration-none">
                        About
                    </a>
                    <a href="/contact" className="text-muted mx-3 text-decoration-none">
                        Contact Us
                    </a>
                    <a href="/blog" className="text-muted mx-3 text-decoration-none">
                        Blog
                    </a>
                </nav>

                {/* Icons */}
                <div className="d-flex align-items-center">
                    <FaHeart className="mx-3 text-dark" size={20} />
                    <FaShoppingCart className="mx-3 text-dark" size={20} />
                    <a href="/profile">
                        <FaUser className="mx-3 text-dark" size={20} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;