import React from 'react';
import {fetchDataFilers, MapIdArray} from "../Store/Actions";
import {Store} from "../Store/Store";
import Select from "./Select";
import {useSelect} from "../hooks/SelectHook";
import {mapIdObjectArray} from "../utility/functions";

const AdvanceFilters = () => {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        !state.filters.length && fetchDataFilers(dispatch);
    },[]);


    React.useEffect(() => {
        MapIdArray(dispatch, mapIdObjectArray(state.filters));
    }, [state.filters.length,dispatch,state.filters]);

    console.log(state);
    const DynamicFilters = function (value: any): JSX.Element {
        return (
            <>
            </>
        );
    };
    const [valueSelect, handleChange] = useSelect();
    if (state.filters.length) {
        return (
            <>
                <Select Array={state.filters} placeholder="Filters" value={valueSelect} handleChange={handleChange}/>
            </>
        );
    } else {
        return <div>Loading ...</div>;
    }
};

export default AdvanceFilters;