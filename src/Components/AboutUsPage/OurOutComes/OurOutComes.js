import React from 'react';
import './OurOutComes.css';

const OurOutComes = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center p-5">
                <div className="mb-5">
                    <p className="text-highlight">Our Success</p>
                    <h3>A healing touch to heal you completely.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
                <div className="col-md-4 col-12 col-sm-4 success-box">
                    <h1 className="text-highlight">93%</h1>
                    <p>Increased satisfaction with life</p>
                </div>
                <div className="col-md-4 col-12 col-sm-4 success-box">
                    <h1 className="text-highlight">500+</h1>
                    <p>Case Solved</p>
                </div>
                <div className="col-md-4 col-12 col-sm-4 success-box">
                    <h1 className="text-highlight">93%</h1>
                    <p>Behavior Recovery after several Sessions</p>
                </div>
            </div>
        </div>
    );
};

export default OurOutComes;