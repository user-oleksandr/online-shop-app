import React from 'react';
import {NavLink} from 'react-router-dom';
import Cart from '../logo/icons8-cart-96.png';
import LapTop from '../logo/icons8-macbook-air-96.png';
import Tablets from '../logo/icons8-ipad-pro-80.png';
import Phones from '../logo/icons8-iphone-14-96.png';


const Navigation = () => {
    return (
        <nav className="navbar navbar-dark navigations fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <button
                    className="navbar-toggler text-light"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end navigations-menu"
                    tabIndex="-1"
                    id="navbarNav"
                    aria-labelledby="navbarNavLabel"
                    style={{width: '20em'}}
                >
                    <div className="offcanvas-header ">
                        <h5 className="offcanvas-title text-light" id="navbarNavLabel">
                            My Online Store
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body justify-content-evenly">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link" activeClassName="active">
                                    <img className='logo-cart' src={LapTop}></img> {' '} Ноутбуки
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/tablet" className="nav-link" activeClassName="active">
                                    <img className='logo-cart' src={Tablets}></img> {' '} Планшети
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/phones" className="nav-link" activeClassName="active">
                                    <img className='logo-cart' src={Phones}></img> {' '} Телефони
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link" activeClassName="active">
                                    <img className='logo-cart' src={Cart}></img> {' '} Корзина
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
