import React from 'react';
import { Button } from 'react-bootstrap';
import topBanner from '../../../Images/we_care.jpg';
import './TopBanner.css';
import { Link } from 'react-router-dom';

const TopBanner = () => {
    
    return (
        <section className="top-banner">
            <div className="container">
                <div className="row d-flex align-items-center p-5">
                    <div className="col-md-6 col-12 col-sm-6">
                        <h2>Be smart and help yourself now</h2>
                        <h1 className="text-highlight ">We Care</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                        <Link to="/contactUs"><Button className="appointment-button">Get a consulation</Button></Link>
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