import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://i.ibb.co/M15gzSG/manuel-cosentino-M3fh-ZSBFo-FQ-unsplash-1.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    <h4>Thank You <br /> For Placing Order</h4>
                    <Nav.Link as={Link} to="/allProducts"><span className="text-white">Check Our More Products</span></Nav.Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;