import React from 'react';
import './Dessert.css';
import Image from '../../images/sweet-2.jpg';
import img from '../../images/sweet-3.jpg';
import image from '../../images/sweet3.jpg';

const Dessert = () => {
    return (
        <div className="dessert-section">
            <div className="container">
                <h1 className="pt-5 text-muted features-title">Sweet Treats</h1>
                <div className="row">
                    <div className="col-md-4 col-lg-4 my-5">
                        <div className="card" style={{ width: "18rem", border: 'none' }}>
                            <img src={Image} className="card-img-top" alt="..." />
                            <div className="card-body bg-success">
                                <h5 className="card-text text-white">Doughlicious</h5>
                                <p className="card-text text-white-50">Belgian Chocolate glazed donuts <br /> Covered in Icing with Sprinkles <br /> on Top </p>
                                <h5 className="card-text text-white">$9.99</h5>
                                <button className="btn btn-warning fw-bold">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 my-5">
                        <div className="card" style={{ width: "18rem", border: 'none' }}>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body bg-success">
                                <h5 className="card-text text-white">Caramel Wonder</h5>
                                <p className="card-text text-white-50">Vanilla Ice Cream Covered with <br /> Caramel and Chocolate Glaze <br /> Topped with a CoCo Stick</p>
                                <h5 className="card-text text-white">$12.99</h5>
                                <button className="btn btn-warning fw-bold">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 my-5">
                        <div className="card" style={{ width: "18rem", border: 'none' }}>
                            <img src={image} className="card-img-top" alt="..." />
                            <div className="card-body bg-success">
                                <h5 className="card-text text-white">Brownie Bunch</h5>
                                <p className="card-text text-white-50">Double Fudge Brownie Squares <br /> Topped with White Chocolate <br /> pieces and macadarmia nuts  </p>
                                <h5 className="card-text text-white">$9.99</h5>
                                <button className="btn btn-warning fw-bold">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dessert;