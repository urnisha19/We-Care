import React, {useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ClientSideBar from '../../../DashboardPage/ClientSideBar/ClientSideBar';
import NavBar from '../../../MultiSharedComponents/NavBar/NavBar';

const TherapyAppointment = () => {
    const name = JSON.parse(localStorage.getItem("name"));
    const email = JSON.parse(localStorage.getItem("email"));

    const history = useHistory()
    const therapyId = JSON.parse(localStorage.getItem("therapyId"));
    const [appointment, setAppointment] = useState({});

    const [info, setInfo] = useState({
        name: name,
        email: email
    });

    useEffect(() => {
        fetch('https://serene-journey-72172.herokuapp.com/therapies')
            .then(res => res.json())
            .then(data => {
                const myAppointment = data.find(e => e._id === therapyId);
                setAppointment(myAppointment);
                console.log(myAppointment);
            })
    }, [])


    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = (e) => {
        const formData = new FormData();//initialize a new FormData object and then append the uploaded files in new formData
        formData.append('name', info.name)
        formData.append('email', info.email)
        formData.append('title', info.title)

        fetch('https://serene-journey-72172.herokuapp.com/addAppointment', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            });

        e.preventDefault();
        alert('Appointment requested  successfully')
        JSON.parse(localStorage.removeItem("therapyId"))
    }


    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row d-flex justify-content-between py-3">
                    <div className="col-md-2 col-12 col-2">
                        <ClientSideBar></ClientSideBar>
                    </div>
                    <div className="col-md-10 col-12 col-sm-10 ">
                        <div className="p-4" style={{ backgroundColor: '#DFE9F2' }}>
                            <h2 className="text-highlight text-center">{appointment.title}</h2>
                            <div className="row mt-5">
                                <form onSubmit={handleSubmit} className="w-100">
                                    <div className="form-group">
                                        <input className='form-control' type="text" placeholder="full name" name="name" defaultValue={name} />
                                    </div>
                                    <div className="form-group">
                                        <input required placeholder='Email address' defaultValue={email} className='form-control' type="email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <input required placeholder='Title' defaultValue={appointment.title} className='form-control' type="text" name="title" onBlur={handleBlur} />
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
        </div>
    );
};

export default TherapyAppointment;