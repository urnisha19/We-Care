import React from 'react';
import './ContactUsArea.css'

const ContactArea = () => {

    return (
        <div className="container">
            <div className="row d-flex align-items-center p-5">
                <div className="col-md-6 col-12 col-sm-6 address-area">
                    <p className="text-highlight">Contact Us Now</p>
                    <h3 className="mb-3">We're here to help you.</h3>
                    <div>
                        <h5>Address</h5>
                        <p>H#000(6th Floor),Road#00</p>
                        <p>Banani,Dhaka,Bangladesh</p>
                    </div>
                    <div className="mt-3">
                        <h5>Questions?</h5>
                        <p>+88 01000000000</p>
                    </div>
                </div>

                <div className="col-md-6 col-12 col-sm-6">
                    <div className="py-3">
                        <form className="contact-form p-3" action="https://formspree.io/f/moqpyjvv" method="POST"
                            id="contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" placeholder="Your name..." required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email"
                                    placeholder="Your email address..." required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" placeholder="Subject..."
                                    required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="4" placeholder="Your message..."
                                    required></textarea>
                            </div>
                            <input type="submit" className="form-control" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactArea;