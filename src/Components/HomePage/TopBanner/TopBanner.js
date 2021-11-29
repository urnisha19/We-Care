import React from 'react';
import { Button } from 'react-bootstrap';
import NavBar from './../../MultiSharedComponents/NavBar/NavBar';
import topBanner from '../../../Images/we_care.png'
import './TopBanner.css';

const TopBanner = () => {
    return (
        <section className="top-banner">
        <div className="container">
            <div className="row d-flex align-items-center top-banner-content p-5">
                <div className="col-md-6 col-12 col-sm-6">
                <h2 className="text-brand">Be smart and help yourself now</h2>
                    <h1 className="text-brand">We Care</h1>
                    <p className="py-3">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                    <Button className="header-button">Get a consulation</Button>
                </div>
                <div className="col-md-6 col-12 col-sm-6">
                    <img src={topBanner} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default TopBanner;