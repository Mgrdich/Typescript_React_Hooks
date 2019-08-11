import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <h1>Rick and Morty</h1>
            <NavLink className="nav-link" to="/Favourites">FAV</NavLink>
        </>
    );
};

export default Navbar;