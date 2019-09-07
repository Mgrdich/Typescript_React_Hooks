import React, {ChangeEvent, useState} from 'react';
import {IPropsSelect} from "../interfaces";

const Select = (props: IPropsSelect) => {
    const {Array, multiple, className, value: valueSelect, handleChange} = props;


    return (
        <div className="form-group">
            <select
                multiple={multiple}
                className={`form-control ${className}`}
                value={valueSelect}
                onChange={(e) => handleChange(e)}
            >
                <option value="" disabled={true} hidden={true}>Filter</option>
                {
                    Array.map((item) => {
                        return (
                            <option value={item.id} key={item.id}>
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