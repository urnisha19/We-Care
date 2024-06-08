import React from 'react';
import { Button } from 'react-bootstrap';
import './TherapiesCardDetail.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';

const TherapiesCardDetail = ({ therapy }) => {

    return (
        <div className="col-md-4">
            <div className="rounded therapyDetail mb-5">
                <div>
                    <img className="img-fluid w-100" src={`data:image/png;base64,${therapy.image.img}`} style={{ height: "275px" }} alt="" />
                    <h4 className="text-highlight my-3">{therapy.title}</h4>
                </div>
                <div className="therapyDetail-text p-3">
                    {/* <p>{therapy.description}</p> */}
                    <p>{therapy.description.substring(0, 400)}{therapy.description.length > 400 && '...'}</p>
                    <div>
                        <Button className="make-appointment-btn mt-3 mb-3 white"><Link className="make-appointment-link" to={`/therapies/therapyAppointment/${therapy._id}`}>Make Appointment</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TherapiesCardDetail;