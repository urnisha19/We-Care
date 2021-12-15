import React from 'react';
import aboutService from '../../../Images/aboutService.jpg'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutOurService = () => {

    return (
        <div className="container">
            <div className="row d-flex align-items-center p-5 ">
                <p className="text-highlight">About Service</p>
                <div className="col-md-4 col-12 col-sm-4">
                    <h2>A healing touch to heal you completely.</h2>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque deserunt corporis provident nesciunt velit iure rerum dolorem, fuga soluta.</p>
                </div>
                <div className="col-md-4 col-12 col-sm-4">
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" /> Anxiety and Depression</p>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Relationships Issues</p>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Relationships Substance Abuse</p>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Parenting Issues</p>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Trauma/Abuse</p>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Grief and Bereavement</p>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="icon-color" />Phase of Life Transitions</p>
                </div>
                <div className="col-md-4 col-12 col-sm-4 ">
                    <img src={aboutService} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default AboutOurService;