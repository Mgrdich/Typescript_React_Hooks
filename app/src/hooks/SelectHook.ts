import {ChangeEvent, useState} from "react";

export function useSelect() { //custom hook that provide all the info for a controlled select component
    const [valueSelect, ChangeSelect] = useState<any>("");

    const handleChange = function (event: ChangeEvent<HTMLSelectElement>):any {
        event.preventDefault();
        ChangeSelect(event.target.value);
    };
    return [valueSelect,handleChange];
}