import React from 'react';
import './AboutUs.css';
import NavBar from '../MultiSharedComponents/NavBar/NavBar';
import HowCanWeHelp from './HowCanWeHelp/HowCanWeHelp';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import OurOutComes from './OurOutComes/OurOutComes';
import Footer from '../MultiSharedComponents/Footer/Footer';
import AboutUsBanner from './AboutUsBanner/AboutUsBanner';


const AboutUs = () => {
    return (
        <div>
            <NavBar></NavBar>
            <AboutUsBanner></AboutUsBanner>
            <HowCanWeHelp></HowCanWeHelp>
            <WhatWeDo></WhatWeDo>
            <OurOutComes></OurOutComes>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;