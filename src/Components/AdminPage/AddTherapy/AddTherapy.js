import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../MultiSharedComponents/NavBar/NavBar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './AddTherapy.css';

const AddTherapy = () => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

    const history = useHistory();
    const [info, setInfo] = useState({ title: '', description: '' });
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', file); // Use 'image' instead of 'image_file'
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://we-care-server-w3we.onrender.com/addTherapy', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            })
            .catch(error => console.error('Error adding therapy:', error));

        alert("New therapy added successfully!");
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row d-flex justify-content-between py-3">
                    <div className="col-md-2 col-12 col-2">
                        <AdminSideBar />
                    </div>
                    <div className="col-md-10 col-12 col-sm-10 ">
                        <h4 className="text-highlight">Add New Therapy</h4>
                        <div className="container p-4" style={{ backgroundColor: '#DFE9F2' }}>
                            {!isAdmin && <h4 className="text-danger">Sorry! You are not admin. </h4>}
                            {isAdmin &&
                                <form onSubmit={handleSubmit} className="py-5 px-4" style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Therapy title</label>
                                            <input onBlur={handleBlur} name="title" className="form-control" type="text" placeholder="Enter the therapy title" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Description</label>
                                            <textarea onBlur={handleBlur} name="description" className="form-control" type="text" placeholder="Therapy Description" required />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Image</label><br />
                                        <input onChange={handleFileChange} type="file" name="image" required /> {/* Use 'image' instead of 'image_file' */}
                                    </div>
                                    <div className="form-group d-flex justify-content-start pt-3">
                                        <button type="submit" className="add-btn">Add Therapy</button>
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

export default AddTherapy;
