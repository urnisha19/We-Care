import React from 'react';
import './Home.css';
import NavBar from '../MultiSharedComponents/NavBar/NavBar';
import TopBanner from './TopBanner/TopBanner';
import WhyChoose from './WhyChooseUs/Facilities';
import ClientReviews from './ClientReviews/Reviews';
import Services from '../MultiSharedComponents/Services/Services';
import Footer from '../MultiSharedComponents/Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <TopBanner></TopBanner>
            <Services></Services>
            <WhyChoose></WhyChoose>
            <ClientReviews></ClientReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;