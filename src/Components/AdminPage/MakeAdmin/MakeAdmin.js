import React, { useState } from 'react';
import NavBar from '../../MultiSharedComponents/NavBar/NavBar';
import AdminSideBar from './../AdminSideBar/AdminSideBar';
import { useHistory } from 'react-router-dom';

const MakeAdmin = () => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

    const history = useHistory();
    const [info, setInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('email', info.email);

        fetch('https://we-care-server-w3we.onrender.com/makeAdmin', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            });
        e.preventDefault();
        alert('Admin added successfully')
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row d-flex justify-content-between py-3">
                    <div className="col-md-2 col-12 col-2">
                        <AdminSideBar></AdminSideBar>
                    </div>
                    <div className="col-md-10 col-12 col-sm-10 ">
                        <h4 className="text-highlight">Make Admin</h4>
                        <div className="container p-4" style={{ backgroundColor: '#DFE9F2' }}>
                            {!isAdmin && <h4 className="text-danger">Sorry! You are not admin. </h4>}
                            {isAdmin &&
                                <form onSubmit={handleSubmit} className="form-row py-5 px-4" id="myForm" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email">Email</label>
                                        <input onBlur={handleBlur} type="email" name="email" placeholder="admin@gmail.com" className="form-control" />
                                        <span className="text-danger">This field is required</span>
                                    </div>
                                    <div className="form-group col-md-6" style={{ paddingTop: '31px' }}>
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;