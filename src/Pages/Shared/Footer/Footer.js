import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-logo">
                            <NavLink to="/home" activeStyle={{ color: "#ffffff" }}><span className="text-white text-uppercase fw-bold">best <span className="text-danger">watch</span> point</span></NavLink >
                            <p style={{ padding: "10px 30px 0 0", textAlign: "justify", fontSize: "14px" }}>All types of watches are available here for your best choose. Your trust is our asset so dont worry about our services. Keep with us and be happy.</p>
                        </div>
                        <div className="col-md-4 footer-menu-left d-flex justify-content-center">
                            <ul className="nav flex-column text-left">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Why Choose Us?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Get Coupons</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Your Opinions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-menu-right d-flex justify-content-center">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Happy Clients</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-center">Copyright &copy; 2021 <span className="fw-bold">Best <span className="text-danger">Watch</span> Point</span></p>
            </div>
        </>
    );
};

export default Footer;