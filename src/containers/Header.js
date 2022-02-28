import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { dropdown } from "../custom/js/header-dropdown"

function Header() {
    useEffect(() => {
        dropdown();
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="container-h">
                    <div className="navbar-header">
                        <button className="navbar-toggler" data-toggle="open-navbar1">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <NavLink exact to="/">
                            <h4>Fake<span>Shop</span></h4>
                        </NavLink>
                    </div>

                    <div className="navbar-menu" id="open-navbar1">
                        <ul className="navbar-nav">
                            <li><NavLink exact to="/products">Products</NavLink></li>
                            <li className="navbar-dropdown">
                                <NavLink exact to="/" onClick={(e) => e.preventDefault()} className="dropdown-toggler" data-dropdown="my-dropdown-id">
                                    Categories <i className="fa fa-angle-down"></i>
                                </NavLink>
                                <ul className="dropdown" id="my-dropdown-id">
                                    <li><NavLink exact to="/products/electronics">Electronics</NavLink></li>
                                    <li className="separator"></li>
                                    <li><NavLink exact to="/products/jewelery">Jewelery</NavLink></li>
                                    <li className="separator"></li>
                                    <li><NavLink exact to="/products/men's clothing">Men's clothing</NavLink></li>
                                    <li className="separator"></li>
                                    <li><NavLink exact to="/products/women's clothing">Women's clothing</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink exact to="/">About</NavLink></li>
                            <li><NavLink exact to="/">Contact</NavLink></li>
                            <li><NavLink exact to="/">Signin</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Header
