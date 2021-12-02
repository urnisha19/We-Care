import React from 'react';
import contactUs from '../../../Images/contactUs.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faHandsHelping, faHeadset } from '@fortawesome/free-solid-svg-icons';
import './ContactProcess.css'

const ContactProcess = () => {

    return (
        <div className="container">
            <div className="row d-flex align-items-center p-5">
                <div className="col-md-6 col-12 col-sm-6">
                    <img src={contactUs} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 col-12 col-sm-6">
                    <p className="text-highlight">Process</p>
                    <h3 className="mb-5">How We Consulting ?</h3>
                    <div>
                        <h5><FontAwesomeIcon icon={faHeadset} className="icon-color" />Call or Email Us First</h5>
                        <p>Donec at mauris pellentesque, sagittis neque ac, ullamcorper sem.</p>
                    </div>
                    <div>
                        <h5><FontAwesomeIcon icon={faCalendarCheck} className="icon-color" />Make Appointment</h5>
                        <p>Aenean at libero posuere, vestibulum neque in, suscipit lectus. Nunc venenatis rutrum mi tristique blandit.</p>
                    </div>
                    <div>
                        <h5><FontAwesomeIcon icon={faHandsHelping} className="icon-color" />Get Your Service</h5>
                        <p>Integer dignissim pretium risus. Class aptent taciti sociosqu a.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactProcess;