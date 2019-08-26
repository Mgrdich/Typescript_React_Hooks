import React from 'react';
import {randomItemArray} from "../utility/functions";

const Unfortunately = (props:{title:string,mainClass:string,customStuff:any}):JSX.Element => {

    const {customStuff,mainClass} = props;
    return (
        <div className={mainClass}>
            <div className="header_pic"><img src={randomItemArray(customStuff.arrayPic)} alt=""/></div>
            <div className="header">{props.title}</div>
            <div className="btns">Home</div>
        </div>
    );
};

export default Unfortunately;