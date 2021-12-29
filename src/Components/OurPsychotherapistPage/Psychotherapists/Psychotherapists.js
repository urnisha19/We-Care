import React from 'react';
import PsychotherapistsDetails from './PsychotherapistsDetails';

const Psychotherapists = () => {
    const Psychotherapists = [
        { id: "1", name: "Eliza J Norwood", img: "https://i.ibb.co/HV07STd/psychologist1.jpg", phone: "+8801000000000", email: "xyz@gmail.com" },
        { id: "2", name: "Stevous M Davis", img: "https://i.ibb.co/T2Hgq0q/psychologist2.jpg", phone: "+8801000000000", email: "xyz@gmail.com" },
        { id: "3", name: "Maryland D", img: "https://i.ibb.co/Csm1nCK/psychologist3.jpg", phone: "+8801000000000", email: "xyz@gmail.com" },
        { id: "4", name: "Marchetti J", img: "https://i.ibb.co/VWCYXxj/psychologist5.jpg", phone: "+8801000000000", email: "xyz@gmail.com" },
        { id: "5", name: "Sherry D Pillow", img: "https://i.ibb.co/XVd68h7/psychologist4.jpg", phone: "+8801000000000", email: "xyz@gmail.com" },
        { id: "6", name: "Essielia F Sledge", img: "https://i.ibb.co/9yd4HF2/psychologist6.jpg", phone: "+8801000000000", email: "xyz@gmail.com" },
        { id: "7", name: "Nancy", img: "https://i.ibb.co/7Nv5jFP/psychologist7.jpg", phone: "+8801000000000", email: "xyz@gmail.com" },
        { id: "8", name: "Maaria J Crispe", img: "https://i.ibb.co/9hhmvFw/psychologist8.jpg", phone: "+8801000000000", email: "xyz@gmail.com" }
    ];

    return (
        <div>
            <div className="container text-center mt-5">
                <p className="text-highlight">Meet Our Team</p>
                <h3 className="mb-3">Professional Psychotherapists</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="d-flex justify-content-center my-5">
                <div className="row w-75">
                    {
                        Psychotherapists.map(psychotherapist =>
                            <PsychotherapistsDetails psychotherapist={psychotherapist} key={psychotherapist.id}></PsychotherapistsDetails>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Psychotherapists;