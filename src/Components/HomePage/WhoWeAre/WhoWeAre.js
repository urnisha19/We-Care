import React from 'react';
import whoWeAre from '../../../Images/whoWeAre.jpg';
import { Button } from 'react-bootstrap';
import './WhoWeAre.css';

const WhoWeAre = () => {
    return (
        <section>
            <div className="container">
                <div className="row d-flex align-items-center p-5">
                    <div className="col-md-6 col-12 col-sm-6">
                        <img src={whoWeAre} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-12 col-sm-6">
                        <h2 className="about-text"> Who We Are</h2>
                        <h3>If you want to lift yourself up, <br /> lift up someone else.</h3>
                        <p className="py-3">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                        <Button className="appointment-button">Learn More</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;