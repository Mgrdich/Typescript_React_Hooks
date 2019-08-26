import React from 'react';
import Unfortunately from "./unfortunately";
import rick from "../Style/src/rick.svg";
import morty from "../Style/src/morty.svg";


const Error = () => {
    const arrayPic = [rick, morty];

    return (
        <Unfortunately title="404 Page is not Found" mainClass="error" customStuff={{arrayPic}}/>
    );
};

export default Error;