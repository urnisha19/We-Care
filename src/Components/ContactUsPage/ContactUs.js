import React from 'react';
import NavBar from '../MultiSharedComponents/NavBar/NavBar';
import './ContactUs.css';
import ContactUsBanner from './ContactUsBanner/ContactUsBanner';
import Footer from '../MultiSharedComponents/Footer/Footer';
import ContactArea from './ContactArea/ContactArea';
import ContactProcess from './ContactProcess/ContactProcess';

const ContactUs = () => {

    return (
        <div>
            <NavBar></NavBar>
            <ContactUsBanner></ContactUsBanner>
            <ContactProcess></ContactProcess>
            <ContactArea></ContactArea>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;