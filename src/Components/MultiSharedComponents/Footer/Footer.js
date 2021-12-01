import React from 'react';
import FooterCol from '../Footer/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    const ourAddress = [
        { name: "H#000(6th Floor),Road#00", link: "//google.com/map" },
        { name: "Banani,Dhaka,Bangladesh", link: "//google.com/map" },
    ]
    const company = [
        { name: "About", link: "#" },
        { name: "Services", link: "#" },
        { name: "Our Psychotherapist ", link: "#" },
        { name: "Terms Conditions", link: "#" },
    ]
    const quickLinks = [
        { name: "Quick Links", link: "#" },
        { name: "Contact", link: "#" },
        { name: "Our Blog", link: "#" }
    ]
    const aboutUs = []

    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row">
                    <FooterCol key={1} menuTitle={<FontAwesomeIcon icon={faMapMarkerAlt} />} menuItems={ourAddress} />
                    <FooterCol key={2} menuTitle="We Care" menuItems={company} />
                    <FooterCol key={3} menuTitle="Quick Links" menuItems={quickLinks} />
                    <FooterCol key={4} menuTitle="About Us" menuItems={aboutUs}>
                        <p className="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatum, cum neque iusto provident unde.</p>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center" style={{ color: "#EA6077" }}>
                    <p className="footer-text">Copyright Urnisha {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;