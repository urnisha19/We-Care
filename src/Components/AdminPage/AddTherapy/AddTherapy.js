import React, { useState } from 'react';
import NavBar from '../../MultiSharedComponents/NavBar/NavBar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './AddTherapy.css';

const AddTherapy = () => {
    const [info, setInfo] = useState({}); //for form info
    const [file, setFile] = useState(null); //for form image file

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        const formData = new FormData();//initialize a new FormData object and then append the uploaded files in new formData
        formData.append('image_file', file)
        formData.append('therapy_title', info.therapy_title)
        formData.append('therapy_description', info.therapy_description)

        fetch('http://localhost:5000/addTherapy', {
            method: 'POST',
            body: formData
        })
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
                        <h4 className="text-highlight">Add New Therapy</h4>
                        <div className="container p-4" style={{ backgroundColor: '#DFE9F2' }}>
                            <form onSubmit={handleSubmit} className="py-5 px-4" style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Therapy title</label>
                                        <input onBlur={handleBlur} name="therapy_title" className="form-control" type="text" placeholder="Enter the therapy title" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Description</label>
                                        <textarea onBlur={handleBlur} name="therapy_description" className="form-control" type="text" placeholder="Course Description" required />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Image</label><br />
                                    <input onChange={handleFileChange} type="file" name="image_file" required />
                                </div>
                                <div className="form-group d-flex justify-content-start pt-3">
                                    <button type="submit" className="add-btn">Add Therapy</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTherapy;