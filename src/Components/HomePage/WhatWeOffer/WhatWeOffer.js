import React from 'react';
import WhatWeOfferDetails from './WhatWeOfferDetails';
import './WhatWeOffer.css'


const WhatWeOffer = () => {
    const WhatWeOffer = [
        { name: "Depression/Anxiety Therapy", description: "Quam sagittis, commodo rutrum proin ipsum at quam metus risus in vivamus leo rutrum porttitor vitae tellus risus eu.", img: "https://i.ibb.co/wzGfzdw/depression.jpg" },
        { name: "Couples Therapy", description: "Quam sagittis, commodo rutrum proin ipsum at quam metus risus in vivamus leo rutrum porttitor vitae tellus risus eu.", img: "https://i.ibb.co/JBn8Lw9/Family-crisis-Young-grumpy-couple-at-marital-counseling-therapy-free-space.jpg" },
        { name: "Individual Therapy", description: "Quam sagittis, commodo rutrum proin ipsum at quam metus risus in vivamus leo rutrum porttitor vitae tellus risus eu.", img: "https://i.ibb.co/N7D2ZGZ/individual-therapy.jpg" }
    ];

    return (
        <div className="what-we-offer">
            <div className="container">
                <div className="text-center">
                    <h2>What <span className="text-highlight">We Offer</span></h2>
                    <p className="text-center">Commodo tempus sapien sit bibendum sit morbi auctor molestie rutrum pellentesque eget vitae justo congue amet malesuada.</p>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <div className="row">
                        {
                            WhatWeOffer.map(services => <WhatWeOfferDetails services={services} key={services.name}></WhatWeOfferDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;