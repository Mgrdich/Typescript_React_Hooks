import React from 'react';
import {fetchDataFilers} from "../Store/Actions";
import {Store} from "../Store/Store";
import Select from "./Select";

const AdvanceFilters = () => {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        fetchDataFilers(dispatch);
    }, [state.filters.length]);

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