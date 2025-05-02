import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/svg/Logo.svg";

const Footer = () => {
    return (
        <footer className="bg-white text-black py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h1 className="m-0" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                            <img src={Logo} alt="Logo" style={{ height: "40px" }} />
                        </h1>
                        <p style={{ fontSize: "0.875rem" }}>
                            We are a residential interior design firm located in Portland. Our
                            boutique-studio offers more than
                        </p>
                        <div className="d-flex">
                            <a href="#" className="text-black me-3" style={{ fontSize: "1rem" }}>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-black me-3" style={{ fontSize: "1rem" }}>
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-black me-3" style={{ fontSize: "1rem" }}>
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a href="#" className="text-black" style={{ fontSize: "1rem" }}>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h3 className="text-uppercase" style={{ fontSize: "1.25rem" }}>Services</h3>
                        <ul className="list-unstyled" style={{ fontSize: "0.875rem" }}>
                            <li>Bonus program</li>
                            <li>Gift cards</li>
                            <li>Credit and payment</li>
                            <li>Service contracts</li>
                            <li>Non-cash account</li>
                            <li>Payment</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h3 className="text-uppercase" style={{ fontSize: "1.25rem" }}>Assistance to the buyer</h3>
                        <ul className="list-unstyled" style={{ fontSize: "0.875rem" }}>
                            <li>Find an order</li>
                            <li>Terms of delivery</li>
                            <li>Exchange and return of goods</li>
                            <li>Guarantee</li>
                            <li>Frequently asked questions</li>
                            <li>Terms of use of the site</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
