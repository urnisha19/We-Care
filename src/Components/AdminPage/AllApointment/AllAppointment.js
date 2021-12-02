import React from 'react';
import NavBar from './../../MultiSharedComponents/NavBar/NavBar';
import AdminSideBar from './../AdminSideBar/AdminSideBar';
import './AllAppointment.css';

const AllAppointment = () => {

    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row d-flex justify-content-between py-3">
                    <div className="col-md-2 col-12 col-2">
                        <AdminSideBar></AdminSideBar>
                    </div>
                    <div className="col-md-10 col-12 col-sm-10 ">
                        <h4 className="text-highlight">Total Appointment List</h4>
                        <div className="p-4" style={{ backgroundColor: '#DFE9F2' }}>
                            <table className="table">
                                <thead style={{ backgroundColor: '#EA6077', color: 'white' }}>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Therapy</th>
                                        <th>Service Charge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllAppointment;