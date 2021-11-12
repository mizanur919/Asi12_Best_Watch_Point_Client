import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import '../Header/Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="header-nav text-white" variant="light" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" className="brand"><span className="text-white text-uppercase fw-bold">best <span className="text-danger">watch</span> point</span></Navbar.Brand>

                    <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="mr-auto my-2 my-lg-0 my-nav"
                            style={{ color: "white" }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home"><span className="text-white">Home</span></Nav.Link>
                            <Nav.Link as={Link} to="/allProducts"><span className="text-white">Explore</span></Nav.Link>

                            {
                                user.email
                                    ?
                                    <>
                                        <Nav.Link as={HashLink} to="/orders"><span className="text-white">My Orders</span></Nav.Link>
                                        <Nav.Link as={HashLink} to="/manageAllOrders"><span className="text-white">Manage Orders</span></Nav.Link>
                                        <Nav.Link as={Link} to="/dashboard"><span className="text-white">Add New Service</span></Nav.Link>
                                        <Nav.Link as={Link} to="/reviewCRUD"><span className="text-white">Review</span></Nav.Link>
                                        <Nav.Link as={Link} to="/makeAdmin"><span className="text-white">Make Admin</span></Nav.Link>
                                        <Button onClick={logOut} className="btn btn-danger text-white">LogOut</Button>
                                        {/* <NavDropdown
                                            title={
                                                <img
                                                    style={{
                                                        width: "35px",
                                                        borderRadius: "50%",
                                                    }}
                                                    src={user.photoURL}
                                                    alt=""
                                                />
                                            }
                                        >
                                            <div className="text-center">
                                                <h6>{user.displayName}</h6>
                                                <p className="m-0 mb-2">{user.email}</p>
                                                <Button onClick={logOut} variant="info"><span className="text-white">LogOut</span></Button>
                                            </div>
                                        </NavDropdown> */}
                                    </>
                                    :
                                    <div className="d-flex">
                                        <Nav.Link as={Link} to="/login"><span className="text-white">Login</span></Nav.Link>
                                        <Nav.Link as={Link} to="/register"><span className="text-white">Sign Up</span></Nav.Link>
                                    </div>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;