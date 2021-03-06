import React from 'react';
import NavBar from '../MultiSharedComponents/NavBar/NavBar';
import TopBanner from './TopBanner/TopBanner';
import WhyChoose from './WhyChooseUs/Facilities';
import ClientReviews from './ClientReviews/Reviews';
import Footer from '../MultiSharedComponents/Footer/Footer';
import WhoWeAre from './WhoWeAre/WhoWeAre'
import WhatWeOffer from './WhatWeOffer/WhatWeOffer';

const Home = () => {

    return (
        <div>
            <NavBar></NavBar>
            <TopBanner></TopBanner>
            <WhoWeAre></WhoWeAre>
            <WhyChoose></WhyChoose>
            <WhatWeOffer></WhatWeOffer>
            <ClientReviews></ClientReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;