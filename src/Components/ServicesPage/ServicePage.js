import React from 'react';
import './ServicePage.css';
import NavBar from '../MultiSharedComponents/NavBar/NavBar';
import ServiceTopBanner from './ServiceTopBanner/ServiceTopBanner';
import AboutOurService from './AboutOurService/AboutOurService';
import Services from '../MultiSharedComponents/Services/Services';
import Footer from '../MultiSharedComponents/Footer/Footer'

const ServicePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <ServiceTopBanner></ServiceTopBanner>
            <AboutOurService></AboutOurService>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default ServicePage;