import React from 'react';
import {NavLink} from "react-router-dom";
import {createBrowserHistory} from "history";

export const Navbar = (props: any) => {
    console.log(createBrowserHistory());
    return (
        <>
            <h1 className="main_header">Rick and Morty</h1>
            <NavLink className="nav-link" to="/Favourites">FAV</NavLink>
        </>
    );
};

export default Navbar;