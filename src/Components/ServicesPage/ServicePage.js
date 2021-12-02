import React from 'react';
import NavBar from '../MultiSharedComponents/NavBar/NavBar';
import ServiceTopBanner from './ServiceTopBanner/ServiceTopBanner';
import AboutOurService from './AboutOurService/AboutOurService';
import Footer from '../MultiSharedComponents/Footer/Footer'

const ServicePage = () => {
    
    return (
        <div>
            <NavBar></NavBar>
            <ServiceTopBanner></ServiceTopBanner>
            <AboutOurService></AboutOurService>
            <Footer></Footer>
        </div>
    );
};

export default ServicePage;