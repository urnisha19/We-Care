import React from 'react';
import './NavBar.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../Images/logo.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Container>
            <Navbar bg="***" expand="lg">
                <Link>
                    <img src={logo} alt="" className="logo w-50 px-3" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link path="/home" className="navBar-link">Home</Link>
                        <Link path="/aboutUs" className="navBar-link">About Us</Link>
                        <Link path="/ourServices" className="navBar-link">Services</Link>
                        <Link path="/ourPsychotherapist" className="navBar-link">Our Psychotherapist </Link>
                        <Link path="dashboard/myAppointments" className="navBar-link">Your Dashboard</Link>
                        <Link path="admin/allAppointments" className="navBar-link">Admin</Link>
                        <Link path="/contactUs" className="navBar-link">Contact Us</Link>
                        <Link path="/login" className="navBar-link">  <Button className="navBar-button">Login</Button></Link>
                    </Nav>
                </ Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;