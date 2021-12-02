import React from 'react';
import whoWeAre from '../../../Images/whoWeAre.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WhoWeAre.css';

const WhoWeAre = () => {

    return (
        <section>
            <div className="container">
                <div className="row d-flex align-items-center p-5">
                    <div className="col-md-6 col-12 col-sm-6">
                        <img src={whoWeAre} alt="" className="img-fluid" />
                    </div>
                    <div className="about-text col-md-6 col-12 col-sm-6">
                        <h2><span className="text-highlight">Who </span>We Are</h2>
                        <h4>Get care from the people who care.</h4>
                        <p className="py-3">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                        <Link to="/aboutUs"><Button className="appointment-button">Learn More</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;