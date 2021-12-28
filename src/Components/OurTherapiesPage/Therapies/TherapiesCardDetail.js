import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './TherapiesCardDetail.css'

const TherapiesCardDetail = ({ therapy }) => {
    const history = useHistory()

    const handleOnClick = () => {
        localStorage.setItem("therapyId", JSON.stringify(therapy._id));
        history.replace('/therapies/therapyAppointment')
    }
    return (
        <div className="col-md-4">
            <div className="rounded therapyDetail mb-5">
                <div>
                    <img className="img-fluid w-100" src={`data:image/png;base64,${therapy.image.img}`} style={{ height: "275px" }} alt="" />
                    <h4 className="text-highlight my-3">{therapy.title}</h4>
                </div>
                <div className="therapyDetail-text p-3">
                    <p>{therapy.description}</p>
                </div>
                <div>
                    <Button className="make-appointment-btn mt-3 mb-3" onClick={handleOnClick}>Make Appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default TherapiesCardDetail;