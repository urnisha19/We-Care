import React from 'react';
import { useHistory } from 'react-router-dom';
import './TherapiesCardDetail.css'

const TherapiesCardDetail = ({ therapy }) => {
    const history = useHistory()

    const handleOnClick = () => {
        history.replace('/therapies/therapyDetail')
    }
    return (
        <div className="col-md-4">
            <div className="rounded therapyDetail mb-5">
                <div onClick={handleOnClick}>
                    <img className="img-fluid w-100" src={`data:image/png;base64,${therapy.image.img}`} style={{ height: "275px" }} alt="" />
                    <h4 className="text-highlight my-3">{therapy.title}</h4>
                </div>
                <div className="therapyDetail-text p-3">
                    <p>{therapy.description}</p>
                </div>
            </div>
        </div>
    );
};

export default TherapiesCardDetail;