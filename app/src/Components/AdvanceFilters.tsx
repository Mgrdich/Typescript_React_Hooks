import React from 'react';
import {fetchDataFilers, MapIdArray} from "../Store/Actions";
import {Store} from "../Store/Store";
import Select from "./Select";
import {mapIdObjectArray} from "../utility/functions";
import {useSelect} from "../hooks/SelectHook";

const AdvanceFilters = () => {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        fetchDataFilers(dispatch);
    }, []);

    React.useEffect(() => {
        MapIdArray(dispatch, mapIdObjectArray(state.filters));
    }, []);


    const [valueSelect, handleChange] = useSelect();
    if (state.filters.length) {
        return (
            <>
                <Select Array={state.filters} placeholder="Filters" value={valueSelect} handleChange={handleChange}/>
            </>
        );
    } else {
        return null;
    }
};

export default AdvanceFilters;