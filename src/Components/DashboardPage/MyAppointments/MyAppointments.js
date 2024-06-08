import React from 'react';
import NavBar from './../../MultiSharedComponents/NavBar/NavBar';
import ClientSideBar from '../ClientSideBar/ClientSideBar';
import { useState, useEffect } from 'react';
import bookingImg from '../../../Images/booking.png'

const MyAppointments = () => {
    const email = JSON.parse(localStorage.getItem("email"));
    const [myAppointment, setMyAppointment] = useState([]);

    useEffect(() => {
        fetch('https://we-care-server-w3we.onrender.com/myAppointment?email=' + email)
            .then(res => res.json())
            .then(data => {
                setMyAppointment(data);
            })
    }, [email])

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
                            <div className="row d-flex justify-content-between enroll-card">
                                {
                                    myAppointment.length === 0 &&
                                    <div className="text-center">
                                        <h4 style={{ color: "#EA6077" }}>You have no appointment!</h4>
                                    </div>
                                }
                                {
                                    myAppointment.map(therapy =>
                                        <div className="card col-md-5 my-2" key={therapy._id}>
                                            <div className="card-header d-flex justify-content-between">
                                                <img className="img-fluid" src={bookingImg} alt="therapyImage" width="60" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-text text-highlight">{therapy.therapy}</h5>
                                                <h6 className="card-text">therapy Id: {therapy._id}</h6>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;