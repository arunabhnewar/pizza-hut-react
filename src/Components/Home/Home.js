import React from 'react';
import Dessert from '../Dessert/Dessert';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OrderNow from '../OrderNow/OrderNow';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Features></Features>
            <OrderNow></OrderNow>
            <Dessert></Dessert>
            <Footer></Footer>
        </div>
    );
};

export default Home; <h1>This is Home page</h1>