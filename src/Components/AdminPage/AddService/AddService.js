import React from 'react';
import NavBar from '../../MultiSharedComponents/NavBar/NavBar';
import './AddService.css';
import AdminSideBar from './../AdminSideBar/AdminSideBar';

const AddService = () => {
    
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row d-flex justify-content-between py-3">
                    <div className="col-md-2 col-12 col-2">
                        <AdminSideBar></AdminSideBar>
                    </div>
                    <div className="col-md-10 col-12 col-sm-10 ">
                    <h4 className="text-highlight">Add Service</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;