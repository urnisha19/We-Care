import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './WhatWeOffer.css';

const WhatWeOfferDetails = ({ services }) => {

    return (
        <div className="col-md-4">
            <div className="rounded serviceDetail mb-5">
                <div>
                    <img className="img-fluid w-100" src={services.img} style={{height:"275px"}} alt="" />
                    <h4 className="mx-3">{services.name}</h4>
                </div>
                <div className="serviceDetail-text p-3">
                    <p>{services.description}</p>
                    <h5 className="text-center mt-3"> <Link to="/ourServices" className="text-highlight mt-3"><FontAwesomeIcon icon={faArrowRight} /> Explore More Services</Link></h5>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOfferDetails;