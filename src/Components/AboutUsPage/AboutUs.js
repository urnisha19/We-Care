import React from 'react';
import './AboutUs.css';
import NavBar from '../MultiSharedComponents/NavBar/NavBar';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import OurOutComes from './OurOutComes/OurOutComes';
import Footer from '../MultiSharedComponents/Footer/Footer';

const AboutUs = () => {
    return (
        <div>
            <NavBar></NavBar>
            <WhoWeAre></WhoWeAre>
            <WhatWeDo></WhatWeDo>
            <OurOutComes></OurOutComes>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;