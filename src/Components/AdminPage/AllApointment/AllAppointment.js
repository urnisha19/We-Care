import React, { useEffect, useState } from 'react';
import NavBar from './../../MultiSharedComponents/NavBar/NavBar';
import AdminSideBar from './../AdminSideBar/AdminSideBar';
import AllAppointmentDetails from './AllAppointmentDetails';

const AllAppointment = () => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

    const [allAppointmentsList, setAllAppointmentsList] = useState([]);

    useEffect(() => {
        fetch('https://we-care-server-w3we.onrender.com/allAppointment')
            .then(res => res.json())
            .then(data => {
                setAllAppointmentsList(data);
            })
    }, [])

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
                                    </tr>
                                </thead>
                                {!isAdmin && <h4 className="text-danger">Sorry! You are not admin. </h4>}
                                {isAdmin &&
                                    <tbody>
                                        {
                                            allAppointmentsList.map(appointment => <AllAppointmentDetails appointment={appointment} />)
                                        }
                                    </tbody>
                                }
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllAppointment;