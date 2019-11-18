import React from 'react';
import {randomItemArray, toggleHeads} from "../utility/functions";
import history from "../utility/history";

interface IProps {
    title: string,
    mainClass: string,
    customStuff: any
    children?:JSX.Element | null
    render?:any
}

const Unfortunately = (props: IProps): JSX.Element => {
    const {customStuff, mainClass} = props;
    const [img,ChangeImage] = React.useState(randomItemArray(customStuff.arrayPic));
    return (
        <div className={mainClass}>
            <div className="header_pic">
                <img
                    src={img}
                    onClick={()=>ChangeImage(toggleHeads(customStuff.arrayPic,img))}
                    alt=""
                />
            </div>
            <div className="header">{props.title}</div>
            <div className="btns" onClick={()=>history.push("/")}>Home</div>
            {props.children}
        </div>
    );
};

export default Unfortunately;