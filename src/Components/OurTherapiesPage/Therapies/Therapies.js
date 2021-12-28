import React, { useEffect, useState } from 'react';
import TherapiesCardDetail from './TherapiesCardDetail'

const Therapies = () => {
    const [therapies, setTherapies] = useState([]);

    useEffect(() => {
        fetch('https://serene-journey-72172.herokuapp.com/therapies')
            .then(res => res.json())
            .then(data => setTherapies(data))
    }, [])

    return (
        <div className="container">
            <div className="text-center">
                <h2>Our <span className="text-highlight">Therapies</span></h2>
                <div className="d-flex justify-content-center my-5">
                    <div className="row">
                        {
                            therapies.map(therapy => <TherapiesCardDetail
                                key={therapy._id}
                                therapy={therapy}
                            ></TherapiesCardDetail>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Therapies;