import {ChangeEvent, useState} from "react";

export function useSelect() { //custom hook that provide all the info for a controlled select component
    const [valueSelect, ChangeSelect] = useState<any>("");

    const handleChange = function (event: ChangeEvent<HTMLSelectElement>, backtoInitial: boolean): any {
        event.preventDefault();
        ChangeSelect(event.target.value);
        if (backtoInitial) {
            ChangeSelect("");
        }
    };
    return [valueSelect, handleChange];
}