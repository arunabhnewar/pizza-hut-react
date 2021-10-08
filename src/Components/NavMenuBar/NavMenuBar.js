import { Link } from 'react-router-dom';
import './NavMenuBar.css';
import React from 'react';
import logo from '../../images/logo.png';

const NavMenuBar = () => {
    return (
        <div className="navbar-container sticky-lg-top">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img">
                            <img className="w-25 py-2" src={logo} alt="" /> <span className="brand-name">Pizza Hut</span>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container">
                            <ul className="d-flex justify-content-end align-items-end">
                                <Link to="/home" className="item">
                                    <li>Home</li>
                                </Link>
                                <Link to="/menu" className="item">
                                    <li>Menu</li>
                                </Link>
                                <Link to="/about" className="item">
                                    <li>About</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenuBar;