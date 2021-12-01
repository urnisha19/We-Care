import React from 'react';
import whoWeAre from '../../../Images/whoWeAre.jpg';
import { Button } from 'react-bootstrap';
import './WhoWeAre.css';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
    
    return (
        <section>
            <div className="container">
                <div className="row d-flex align-items-center p-5">
                    <div className="col-md-6 col-12 col-sm-6">
                        <img src={whoWeAre} alt="" className="img-fluid" />
                    </div>
                    <div className="about-text col-md-6 col-12 col-sm-6">
                        <h2> Who We Are</h2>
                        <h3>Get care from the people who care.</h3>
                        <p className="py-3">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                        <Link to="/aboutUs"><Button className="appointment-button">Learn More</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;