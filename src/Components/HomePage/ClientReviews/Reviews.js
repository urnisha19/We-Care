import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';

const Reviews = () => {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch(`https://we-care-server-w3we.onrender.com/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviewData(data);
            })
    }, [])

    return (
        <div className="review-container my-5 py-5">
            <div className="text-center">
                <h2>Our Clients <span className="text-highlight">Review</span></h2>
            </div>
            <div className="d-flex justify-content-center my-5">
                <div className="row w-75">
                    {
                        reviewData.map(review => <ReviewDetail key={review._id} review={review}></ReviewDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;