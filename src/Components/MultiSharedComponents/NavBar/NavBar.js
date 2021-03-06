import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../Images/logo.svg'
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    const email = JSON.parse(localStorage.getItem("email"));

    const history = useHistory();

    const handleLogOut = () => {
        localStorage.clear();
        history.go(0);
    }

    return (
        <Container>
            <Navbar bg="***" expand="lg">
                <Link to="/home">
                    <img src={logo} alt="" className="logo w-50 px-3" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="navBar-link">Home</Link>
                        <Link to="/ourServices" className="navBar-link">Our Therapies</Link>
                        <Link to="/ourPsychotherapists" className="navBar-link">Our Psychotherapist </Link>
                        <Link to="/aboutUs" className="navBar-link">About Us</Link>
                        <Link to="/contactUs" className="navBar-link">Contact Us</Link>
                        <Link to="/dashboard/myAppointments" className="navBar-link">Your Dashboard</Link>
                        <Link to="/admin/allAppointments" className="navBar-link">Admin</Link>
                        {
                            email ?
                                <Button onClick={handleLogOut} className="navBar-button">Logout</Button>
                                :
                                <Link to="/login" className="navBar-link">  <Button className="navBar-button">Login</Button></Link>
                        }
                    </Nav>
                </ Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;