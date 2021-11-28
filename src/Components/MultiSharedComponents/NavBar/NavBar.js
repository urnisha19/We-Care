import React from 'react';
import './NavBar.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../Images/logo.png'

const NavBar = () => {
    return (
        <Container>
            <Navbar bg="***" expand="lg">
                <a>
                    <img src={logo} alt="" className="logo w-50 px-3"/>
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <a className="navBar-link">Home</a>
                <a className="navBar-link">About Us</a>
                <a className="navBar-link">Services</a>
                <a className="navBar-link">Our Psychotherapist </a>
                <a className="navBar-link">Your Dashboard</a>
                <a className="navBar-link">Admin</a>
                <a className="navBar-link">Contact Us</a>
                <a className="navBar-link">  <Button className="navBar-button">Login</Button></a>
                </Nav>
                </ Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;