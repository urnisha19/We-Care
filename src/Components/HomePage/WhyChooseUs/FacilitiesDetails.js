import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import './FacilitiesDetails.css';

const FacilitiesDetails = ({ facility }) => {
    
    return (
        <div className="container">
            <div className="d-flex flex-column py-2">
                <div className="rounded facilityDetail">
                    <div className="mx-3 mt-3">
                        <h5 className="text-highlight font-weight-bold"><FontAwesomeIcon icon={faCheckSquare} style={{ color: "##EA6077" }} /> {facility.title}</h5>
                    </div>
                    <div className="facilityDetail-text p-3">
                        <p>{facility.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilitiesDetails;