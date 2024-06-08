import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const DeleteTherapy = ({ therapyId }) => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    const history = useHistory();

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this therapy?")) {
            try {
                const response = await axios.delete(`https://we-care-server-w3we.onrender.com/therapies/${therapyId}`);
                if (response.status === 200) {
                    alert("Therapy deleted successfully!");
                    setTimeout(() => {
                        history.push('/ourServices');
                    }, 2000);
                } else {
                    alert("Failed to delete the therapy!");
                }
            } catch (error) {
                alert("An error occurred while deleting the therapy!");
            }
        }
    };

    return (
        <>
            {!isAdmin && <h4 className="text-danger">Sorry! You are not admin. </h4>}
            {isAdmin && 
                <button onClick={handleDelete} className="btn btn-xs btn-danger">
                    Delete
                </button>
            }
        </>
    );
};

export default DeleteTherapy;
