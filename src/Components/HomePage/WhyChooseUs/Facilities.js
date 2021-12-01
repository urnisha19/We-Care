import React from 'react';
import FacilityDetails from './FacilitiesDetails'
import whyChooseUs from '../../../Images/whyChooseUs.png'

const Facilities = () => {
    const Facilities = [
        { id: 1, title: "30+ In House Psychiatrist" },
        { id: 2, title: "New Techniques​" },
        { id: 3, title: "Vast Experience​​" },
        { id: 4, title: "3127 Successful Therapy" },
        { id: 5, title: "Online Therapy" }
    ];

    return (
        <section className="container my-5 py-5">
            <div className="text-center">
                <h2>Why <span className="text-highlight">Choose US</span></h2>
                <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum facilis laboriosam voluptas beatae, quis, fugit tempora autem voluptates sit ipsa culpa provident nemo assumenda, veniam quos neque quia ab natus.</p>
            </div>
            <div className="row d-flex align-items-center p-5">
                <div className="col-md-6 col-12 col-sm-6">
                    <img src={whyChooseUs} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 col-12 col-sm-6" >
                    {
                        Facilities.map(facility => <FacilityDetails facility={facility} key={facility.title}></FacilityDetails >)
                    }
                </div>

            </div>
        </section>
    );
}

export default Facilities;