import React from 'react';
import './Features.css';
import img from '../../images/product-3.jpg';
import image from '../../images/product-2.jpg';
import Image from '../../images/product-1.jpg';

const Features = () => {
    return (
        <div className="features-section">
            <div className="container container-md container-lg">
                <h1 className="pt-5 text-muted features-title">Choose Your Favorite</h1>
                <div className="row gx-3">
                    <div className="col-md-4 col-lg-4 my-5">
                        <div className="card" style={{ width: "18rem", border: 'none' }}>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body bg-success">
                                <h5 className="card-text text-white">Supreme Pizza</h5>
                                <p className="card-text text-white-50">Mariana Sauce, Basil, Italian <br /> Sausage, Roma Tomatoes, Olives <br /> and Pasto </p>
                                <h5 className="card-text text-white">$19.99</h5>
                                <button className="btn btn-warning fw-bold">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 my-5">
                        <div className="card" style={{ width: "18rem", border: 'none' }}>
                            <img src={image} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body bg-success">
                                <h5 className="card-text text-white">Hawaiian Paradise</h5>
                                <p className="card-text text-white-50">Mariana Sauce, Basil, Italian <br /> Sausage, Roma Tomatoes, Olives <br /> and Pasto </p>
                                <h5 className="card-text text-white">$16.99</h5>
                                <button className="btn btn-warning fw-bold">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 my-5">
                        <div className="card" style={{ width: "18rem", border: 'none' }}>
                            <img src={Image} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body bg-success">
                                <h5 className="card-text text-white">Veggie Overload</h5>
                                <p className="card-text text-white-50">Mariana Sauce, Basil, Italian <br /> Sausage, Roma Tomatoes, Olives <br /> and Pasto </p>
                                <h5 className="card-text text-white">$14.99</h5>
                                <button className="btn btn-warning fw-bold">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;