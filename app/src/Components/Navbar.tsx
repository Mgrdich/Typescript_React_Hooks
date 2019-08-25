import React from 'react';
import {NavLink} from "react-router-dom";
import {createBrowserHistory} from "history";
import logo from "../Style/src/logo.svg"

export const Navbar = (props: any) => {
    console.log(createBrowserHistory());
    return (
        <div className="myNavbar">
            <div className="main-header-image">
                <img src={logo} alt=""/>
            </div>
            <NavLink className="nav-link" to="/Favourites">FAV</NavLink>
        </div>
    );
};

export default Navbar;