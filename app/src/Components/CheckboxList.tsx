import React, {useState} from 'react';
import {IPropsCheckboxList} from "../interfaces";

const CheckboxList = (props: IPropsCheckboxList): JSX.Element => {
    const [dropdown, Changedropdown] = useState(false);
    const renderDropdown = function (show: boolean): JSX.Element {
        const dropdownClass = (dropdown)?'show':'';
        if (show) {
            return (
                <ul className={`dropdown-menu ${dropdownClass}`} aria-labelledby="dLabel">
                    {
                        listArray.map((item: any) => {
                            return (
                                <li className="checkbox form-group" key={item.id}>
                                    <input type="checkbox" id={item} value={item} name={item.name}/>
                                    <label htmlFor="valuePot">{item.field}</label>
                                </li>
                            );
                        })
                    }
                </ul>
            )
        } else {
            return (
                <>
                </>
            )
        }

    };
    const {Array: listArray} = props;

    return (
        <div className={`dropdown`} id="valueItemDrop">
            <button className="selectbox" onClick={() => Changedropdown(!dropdown)} onBlur={()=>Changedropdown(!dropdown)}>
                Filter
            </button>
            {renderDropdown(dropdown)}
        </div>
    );
};

export default CheckboxList;