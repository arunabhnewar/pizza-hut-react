import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer-container pt-3">
            <div className="container">
                <div className="row pt-3 mx-auto">
                    <div className="col-md-3 text-start">
                        <div className="brand-name">
                            <h4>Pizza Hut</h4>
                        </div>

                        <div className="about-footer pt-4">
                            <h5 className="text-warning">About Us</h5>
                            <small className="">We gave our customers healthy food and great atmosphere</small>
                        </div>

                        <div className="contact-footer pt-4">
                            <h5 className="text-warning">Contact Us</h5>
                            <FontAwesomeIcon icon={faPhoneVolume} /> <small>+91 9999 999 999</small> <br />
                            <FontAwesomeIcon icon={faEnvelope} /> <small>pizzahut@mail.com</small>
                        </div>
                    </div>

                    <div className="col-md-3 text-start information-footer">
                        <h5 className="text-warning">Information</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Menu</li>
                            <li>Booking</li>
                            <li>Delivery</li>
                        </ul>
                    </div>

                    <div className="col-md-3 text-start faq-footer">
                        <h5 className="text-warning">FAQ and Links</h5>
                        <ul className="text-start">
                            <li>Services</li>
                            <li>Supports</li>
                            <li>Terms and Condition</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>


                    <div className="col-md-3 text-start subscribe-footer">
                        <h5 className="text-warning">Subscribe More Info</h5>
                        <input className="w-75 outline-none mb-3" type="email" placeholder="Email" />
                        <div>
                            <button className="btn btn-warning">Subscribe</button>
                        </div>
                    </div>

                    <hr className="mx-auto mt-3" />

                    <div className="social-icon d-flex justify-content-between align-items-between">
                        <div className="text-warning">
                            <span className="pe-2 fs-5"><FontAwesomeIcon icon={faFacebook} /> </span>
                            <span className="pe-2 fs-5"><FontAwesomeIcon icon={faInstagram} /> </span>
                            <span className="pe-2 fs-5"><FontAwesomeIcon icon={faYoutube} /> </span>
                            <span className="pe-2 fs-5"><FontAwesomeIcon icon={faTwitter} /> </span>
                            <span className="pe-2 fs-5"><FontAwesomeIcon icon={faWhatsapp} /> </span>
                        </div>
                        <div>
                            <span className="">Copyright: @ all rights reserved by newardevil.com</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;