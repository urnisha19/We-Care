import React, { useContext, useState } from 'react';
import NavBar from './../../MultiSharedComponents/NavBar/NavBar';
import ClientSideBar from './../ClientSideBar/ClientSideBar';
import { UserContext } from './../../../App';

const AddReview = () => {
    const [loggedInUser] = useContext(UserContext);
    const [addReviewInfo, setAddReviewInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...addReviewInfo };
        newInfo[e.target.name] = e.target.value;
        setAddReviewInfo(newInfo);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('name', loggedInUser.name);
        formData.append('occupation', addReviewInfo.occupation);
        formData.append('description', addReviewInfo.description);

        fetch('http://localhost:5000/addReview', {
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
                        <ClientSideBar></ClientSideBar>
                    </div>
                    <div className="col-md-10 col-12 col-sm-10 ">
                        <h4 className="text-highlight">Add Review</h4>
                        <div className="container p-4" style={{ backgroundColor: '#DFE9F2' }}>
                            <form onSubmit={handleSubmit} className="py-5 px-4" style={{ padding: '10px', borderRadius: '10px' }}>
                                <div className="form-group">
                                    <input onBlur={handleBlur} name="name" type="text" value={loggedInUser.name} className="form-control" required="true" />
                                </div>
                                <div className="form-group mt-3">
                                    <input onBlur={handleBlur} name="occupation" placeholder="Occupation,Company’s name" className="form-control" required="true" />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea onBlur={handleBlur} name="description" placeholder="Review Description" className="form-control" required="true" rows="3"></textarea>
                                </div>
                                <div className="form-group d-flex justify-content-start pt-3">
                                    <button type="submit" className="add-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;