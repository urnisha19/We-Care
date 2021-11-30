import React from 'react';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutUs from '../../../Images/aboutUs.jpg';
import './HowCanWeHelp.css';

const HowCanWeHelp = () => {

    return (
        <div className="container">
            <div className="row d-flex align-items-center p-5">
                <div >
                    <p className="text-highlight">How can we help you ?</p>
                    <h3>Tell us and we shall find you a way.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
                <div className="col-md-6 col-12 col-sm-6">
                    <div className="row d-flex align-items-center p-5 service-list">
                        <div className="col-md-6 col-12 col-sm-6">
                            <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" /> Anxiety and Depression</p>
                            <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Relationships Issues</p>
                            <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Relationships Substance Abuse</p>
                            <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Parenting Issues</p>
                        </div>
                        <div className="col-md-6 col-12 col-sm-6">
                            <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Trauma/Abuse</p>
                            <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Grief and Bereavement</p>
                            <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Phase of Life Transitions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 col-sm-6">
                    <img src={aboutUs} alt="" className="img-fluid side-img" />
                </div>
            </div>
        </div>
    );
};

export default HowCanWeHelp;