import React from 'react';
import './OrderNow.css';

const OrderNow = () => {
    return (
        <div className="order-now-section pt-5 my-5">
            <h1 className="pt-5 text-warning fw-bold">Pizza of the Day</h1>
            <p className="text-white pb-4">Truffle alfredo sauce topped with 24 carat gold dust</p>
            <button className="btn btn-warning fw-bold">Order Now</button>
        </div>
    );
};

export default OrderNow;