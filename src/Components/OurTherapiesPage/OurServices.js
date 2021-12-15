import React from 'react';
import NavBar from '../MultiSharedComponents/NavBar/NavBar';
import ServiceTopBanner from './ServiceTopBanner/ServiceTopBanner';
import AboutOurService from './AboutOurService/AboutOurService';
import Footer from '../MultiSharedComponents/Footer/Footer'
import Therapies from './Therapies/Therapies';

const OurServices = () => {

    return (
        <div>
            <NavBar></NavBar>
            <ServiceTopBanner></ServiceTopBanner>
            <AboutOurService></AboutOurService>
            <Therapies></Therapies>
            <Footer></Footer>
        </div>
    );
};

export default OurServices;