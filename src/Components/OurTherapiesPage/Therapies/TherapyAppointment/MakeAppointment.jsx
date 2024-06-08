import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import NavBar from '../../../MultiSharedComponents/NavBar/NavBar';
import ClientSideBar from '../../../DashboardPage/ClientSideBar/ClientSideBar';

const MakeAppointment = () => {
    const name = JSON.parse(localStorage.getItem("name"));
    const email = JSON.parse(localStorage.getItem("email"));
   
    const { id } = useParams();
    const [therapyTitle, setTherapyTitle] = useState('');
  
    const history = useHistory();

    useEffect(() => {
        fetch(`https://we-care-server-w3we.onrender.com/therapies/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.title)
                setTherapyTitle(data.title)
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const appointmentData = {
            email:email,
            name: name,
            therapyTitle: therapyTitle
        };

        fetch('https://we-care-server-w3we.onrender.com/addAppointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appointmentData)
        })
            .then(response => response.json())
            .then(data => {
                alert('Appointment made successfully!');
                history.push('/dashboard/myAppointments');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to make appointment');
            });
    };

    return (
        <div>
            <NavBar/>
            <div className="row d-flex justify-content-between py-3">
                <div className="col-md-2 col-12 col-2">
                    <ClientSideBar/>
                </div>
                <div className="col-md-10 col-12 col-sm-10">
                    <div className="p-4" style={{ backgroundColor: '#DFE9F2' }}>
                        <h2 className="text-highlight text-center">Make an Appointment for {therapyTitle}</h2>
                        <div className="row mt-5">
                            <form onSubmit={handleSubmit} className="w-100">
                                <div className="form-group">
                                    <input
                                        className='form-control'
                                        type="text"
                                        name='name'
                                        placeholder={name}
                                        value={name}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className='form-control'
                                        type="email"
                                        name="email"
                                        placeholder={email}
                                        value={email}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className='form-control'
                                        type="text"
                                        name="therapyTitle"
                                        placeholder={therapyTitle}
                                        value={therapyTitle}
                                        readOnly
                                    />
                                </div>
                                <br />
                                <div className="form-group d-flex justify-content-start pt-3">
                                    <button type="submit" className="add-btn">Request Appointment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;
