import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './ClientSideBar.css';

const ClientSideBar = () => {

    return (
        <div className="sidebar d-flex flex-column">
            <Link to="/dashboard/myAppointments" className="py-1">
                <h6 className="d-inline"><FontAwesomeIcon icon={faClipboardCheck} className="text-highlight" /><span className="text-dark px-2">My Appointments</span></h6>
            </Link>
            <Link to="/dashboard/addReview" className="py-1">
                <h6 className="d-inline"><FontAwesomeIcon icon={faCommentAlt} className="text-highlight" /><span className="text-dark px-2">Add Review</span></h6>
            </Link>
        </div>
    );
};

export default ClientSideBar;