import React from 'react';
import {IPropsSelect} from "../interfaces";

const Select = (props:IPropsSelect) => {
    return (
        <div className="form-group">
            <select
                multiple={props.multiple}
                className="form-control"
            >
                <option value="" disabled={true} selected hidden={true}>Filter</option>
                {
                    props.Array.map((item, index) => {
                        return (
                            <option value={item.id} key={item.id} className="form-">
                                {item.name}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    );
};

export default Select;