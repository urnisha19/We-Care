import React, { useEffect, useState } from 'react';
import NavBar from './../../MultiSharedComponents/NavBar/NavBar';
import AdminSideBar from './../AdminSideBar/AdminSideBar';
import AllAppointmentDetails from './AllAppointmentDetails';

const AllAppointment = () => {
    // FIX 1: Safely parse localStorage to prevent the "undefined" crash
    const rawIsAdmin = localStorage.getItem("isAdmin");
    const isAdmin = (rawIsAdmin && rawIsAdmin !== "undefined") ? JSON.parse(rawIsAdmin) : false;

    const [allAppointmentsList, setAllAppointmentsList] = useState([]);

    useEffect(() => {
        fetch('https://we-care-server-w3we.onrender.com/allAppointment')
            .then(res => res.json())
            .then(data => {
                setAllAppointmentsList(data);
            })
            .catch(error => console.error("Failed to fetch appointments:", error)); // Added basic error handling
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
                                
                                {!isAdmin && (
                                    <tbody>
                                        <tr>
                                            <td colSpan="3">
                                                <h4 className="text-danger mt-3">Sorry! You are not an admin. </h4>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}

                                {isAdmin && (
                                    <tbody>
                                        {
                                            allAppointmentsList.map(appointment => (
                                                <AllAppointmentDetails 
                                                    key={appointment._id} // FIX 2: Added the unique key prop
                                                    appointment={appointment} 
                                                />
                                            ))
                                        }
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllAppointment;