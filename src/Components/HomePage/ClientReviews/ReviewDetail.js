import React from 'react';
import img from '../../../Images/review-client.png'
import './ReviewDetail.css';

const ReviewDetail = ({ review }) => {
    const { name, occupation, description } = review;

    return (
        <div className="col-md-4 py-md-3 my-md-3 my-2 ">
            <div className="rounded reviewDetail">
                <div className="d-flex align-items-center mt-2">
                    <img className="img-fluid mx-3" src={img} alt="reviewImage" width="60" />
                    <div>
                        <h6 className="font-weight-bold">{name}</h6>
                        <p><small className="text-secondary">{occupation}</small></p>
                    </div>
                </div>
                <div className="reviewDetail-text p-3">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;