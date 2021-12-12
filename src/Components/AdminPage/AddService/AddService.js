import React from 'react';
import NavBar from '../../MultiSharedComponents/NavBar/NavBar';
import AdminSideBar from './../AdminSideBar/AdminSideBar';
import './AddService.css';

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
                        <div className="container p-4" style={{ backgroundColor: '#DFE9F2' }}>
                            <form className="py-5 px-4" style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Therapy title</label>
                                        <input name="therapy-title" className="form-control" type="text" placeholder="Enter the therapy title" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Description</label>
                                        <textarea name="description" className="form-control" type="number" placeholder="Course Description" required />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Image</label><br />
                                    <input type="file" name="file" required />
                                </div>
                                <div className="form-group d-flex justify-content-start pt-3">
                                    <button type="submit" className="add-btn">Add Service</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;