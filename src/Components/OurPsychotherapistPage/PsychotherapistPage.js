import React from 'react';
import './PsychotherapistPage.css';
import NavBar from '../MultiSharedComponents/NavBar/NavBar';
import AboutTeam from './AboutTeam/AboutTeam';
import Psychotherapists from './Psychotherapists/Psychotherapists';
import Footer from '../MultiSharedComponents/Footer/Footer';

const PsychotherapistPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <AboutTeam></AboutTeam>
            <Psychotherapists></Psychotherapists>
            <Footer></Footer>
        </div>
    );
};

export default PsychotherapistPage;