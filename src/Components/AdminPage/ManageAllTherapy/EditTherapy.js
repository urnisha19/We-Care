import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import NavBar from '../../MultiSharedComponents/NavBar/NavBar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const EditTherapy = () => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    const history = useHistory();
    const { id } = useParams();

    const [therapy, setTherapy] = useState({ title: '', description: '' });

    useEffect(() => {
        fetch(`https://we-care-server-w3we.onrender.com/therapies/${id}`)
            .then(response => response.json())
            .then(data => {
                setTherapy(data);
            })
            .catch(error => console.error('Error fetching therapy:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target; // Accessing the form element

        const updatedData = {
            title: form.therapy_title.value,
            description: form.therapy_description.value,
        };

        fetch(`https://we-care-server-w3we.onrender.com/therapies/${id}`, {
            method: "PATCH", // Using PATCH method for partial update
            headers: {
                "Content-Type": "application/json", // Specifying JSON content type
            },
            body: JSON.stringify(updatedData), // Converting user data to JSON string
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(() => {
                alert("Therapy Updated");
                history.push('/ourServices');
            })
            .catch((error) => {
                console.error("Error updating therapy:", error);
                alert("Failed to update therapy");
            });
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row d-flex justify-content-between py-3">
                    <div className="col-md-2 col-12 col-2">
                        <AdminSideBar />
                    </div>
                    <div className="col-md-10 col-12 col-sm-10">
                        <h4 className="text-highlight">Edit Therapy</h4>
                        <div className="container p-4">
                            {!isAdmin && <h4 className="text-danger">Sorry! You are not admin. </h4>}
                            {isAdmin &&
                                <form onSubmit={handleSubmit} className="py-5 px-4">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Therapy title</label>
                                            <input name="therapy_title" className="form-control" type="text" defaultValue={therapy.title} placeholder="Enter the therapy title" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Description</label>
                                            <textarea name="therapy_description" className="form-control" type="text" defaultValue={therapy.description} placeholder="Therapy Description" required />
                                        </div>
                                    </div>
                                    <div className="form-group d-flex justify-content-start pt-3">
                                        <button type="submit" className="add-btn">Update Therapy</button>
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

export default EditTherapy;
