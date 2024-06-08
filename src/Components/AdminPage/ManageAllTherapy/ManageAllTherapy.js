import React, { useEffect, useState } from 'react';
import axios from "axios";
import ManageAllTherapyRow from './ManageAllTherapyRow';
import NavBar from '../../MultiSharedComponents/NavBar/NavBar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const ManageAllTherapy = () => {
    const [therapies, setTherapies] = useState();

    useEffect(() => {
        async function load() {
            const data = await axios.get("https://we-care-server-w3we.onrender.com/therapies");
            if (data?.status === 200) {
                setTherapies(data?.data);
            }
        }
        load();
    }, []);

    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row d-flex justify-content-between py-3">
                    <div className="col-md-2 col-12 col-2">
                        <AdminSideBar></AdminSideBar>
                    </div>
                    <div className="col-md-10 col-12 col-sm-10 ">
                        <h4 className="text-highlight">Mange All Therapies</h4>

                        <div className="p-4" style={{ backgroundColor: '#DFE9F2' }}>
                            <table className="table">
                                <thead style={{ backgroundColor: '#EA6077', color: 'white' }}>
                                    <tr>
                                        <th>Title</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {therapies?.map((therapy) => (
                                        <ManageAllTherapyRow key={therapy?._id} therapy={therapy} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ManageAllTherapy;