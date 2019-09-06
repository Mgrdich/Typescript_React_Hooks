import React from 'react';
import {fetchDataFilers, MapIdArray} from "../Store/Actions";
import {Store} from "../Store/Store";
import Select from "./Select";
import {mapIdObjectArray} from "../utility/functions";

const AdvanceFilters = () => {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        fetchDataFilers(dispatch);
    }, [state.filters.length]);

    React.useEffect(() => {
        MapIdArray(dispatch, mapIdObjectArray(state.filters));
    }, [state.episodes.length]);
    console.log(state);
    if (state.filters.length) {
        return (
            <>
                <Select Array={state.filters} placeholder="Filters"/>
            </>
        );
    } else {
        return null;
    }
};

export default AdvanceFilters;