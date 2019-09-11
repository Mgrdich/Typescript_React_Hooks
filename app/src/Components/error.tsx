import React from 'react';
import Unfortunately from "./unfortunately";
import {arrayPic} from "../utility/Globals";


const Error = ():JSX.Element => {
    return (
        <Unfortunately
            title="404 Page is not Found"
            mainClass="error"
            customStuff={{arrayPic}}

        />
    );
};

export default Error;