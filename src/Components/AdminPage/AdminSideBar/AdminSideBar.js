import React from 'react';
import { Link } from 'react-router-dom';
import { faClipboardList, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const AdminSideBar = () => {

    return (
        <div className="sidebar d-flex flex-column">
            <Link to="/admin/addTherapy" className="py-1">
                <h6 className="d-inline"><FontAwesomeIcon icon={faPlus} className="text-highlight" /><span className="text-dark px-2">Add Therapy</span></h6>
            </Link>
            <Link to="/admin/manageTherapy" className="py-1">
                <h6 className="d-inline"><FontAwesomeIcon icon={faEdit} className="text-highlight" /><span className="text-dark px-2">Mange All Therapy</span></h6>
            </Link>
            <Link to="/admin/allAppointments" className="py-1">
                <h6 className="d-inline"><FontAwesomeIcon icon={faClipboardList} className="text-highlight" /><span className="text-dark px-2">Appointment List</span></h6>
            </Link>
            <Link to="/admin/makeAdmin" className="py-1">
                <h6 className="d-inline text-brand"><FontAwesomeIcon icon={faUserPlus} className="text-highlight" /><span className="text-dark px-2">Make Admin</span></h6>
            </Link>
        </div>
    );
};

export default AdminSideBar;