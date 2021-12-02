import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Psychotherapists.css'

const PsychotherapistsDetails = ({ psychotherapist }) => {

    return (
        <div className="col-md-3 py-md-3 my-md-3 my-2">
            <div className="rounded psychotherapistDetail">
                <div>
                    <div>
                        <img className="img-fluid w-100" src={psychotherapist.img} alt="psychotherapist" />
                        <h4 className="mx-3">{psychotherapist.name}</h4>
                    </div>
                    <div className="psychotherapistDetail-text p-3">
                        <p><span className="font-bold">Email:</span> {psychotherapist.email}</p>
                        <p><span className="font-bold">Phone:</span> {psychotherapist.phone}</p>
                        <Link to="/contactUs"><Button className="make-appointment-btn mt-3">Make Appointment</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PsychotherapistsDetails;