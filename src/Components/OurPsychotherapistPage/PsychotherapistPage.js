import React from 'react';
import NavBar from '../MultiSharedComponents/NavBar/NavBar';
import Psychotherapists from './Psychotherapists/Psychotherapists';
import Footer from '../MultiSharedComponents/Footer/Footer';
import PsychotherapistsBanner from './PsychotherapistsBanner/PsychotherapistsBanner';

const PsychotherapistPage = () => {

    return (
        <div>
            <NavBar></NavBar>
            <PsychotherapistsBanner></PsychotherapistsBanner>
            <Psychotherapists></Psychotherapists>
            <Footer></Footer>
        </div>
    );
};

export default PsychotherapistPage;