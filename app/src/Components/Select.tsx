import React from 'react';
import {IPropsSelect} from "../interfaces";

const Select = (props:IPropsSelect) => {
    console.log(props);
    return (
        <select
            multiple={props.multiple}
        >
            {
                props.Array.map((item, index) => {
                    return(
                        <option value={item.id} key={item.id}>
                            {item.name}
                        </option>
                    )
                    })
            }
        </select>
    );
};

export default Select;