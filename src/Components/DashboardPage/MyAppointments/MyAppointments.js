import React from 'react';
import './MyAppointments.css';
import NavBar from './../../MultiSharedComponents/NavBar/NavBar';
import ClientSideBar from '../ClientSideBar/ClientSideBar';

const MyAppointments = () => {

    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row d-flex justify-content-between py-3">
                    <div className="col-md-2 col-12 col-2">
                        <ClientSideBar></ClientSideBar>
                    </div>
                    <div className="col-md-10 col-12 col-sm-10 ">
                        <h4 className="text-highlight">My Appointments</h4>
                        <div className="p-4" style={{ backgroundColor: '#DFE9F2' }}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;