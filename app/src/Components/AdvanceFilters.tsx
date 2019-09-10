import React from 'react';
import {fetchDataFilers, MapIdArray} from "../Store/Actions";
import {Store} from "../Store/Store";
import Select from "./Select";
import {useSelect} from "../hooks/SelectHook";
import {mapIdObjectArray} from "../utility/functions";
import {useFetch} from "../hooks/FetchingHook";

const AdvanceFilters = () => {
    const [valueSelect, handleChange] = useSelect();
    const [AdvancedFilter1, handleChange1] = useSelect();
    const [AdvancedFilter2, handleChange2] = useSelect();
    const [AdvancedFilter3, handleChange3] = useSelect();

    const {state, dispatch} = React.useContext(Store);

    useFetch(fetchDataFilers, dispatch);

    React.useEffect(() => {
        MapIdArray(dispatch, mapIdObjectArray(state.filters));
    }, [state.filters.length, dispatch, state.filters]);


    const DynamicFilters = function (value: any): JSX.Element {

        switch (value) {
            case "All111":
                return (
                    <>
                        <Select Array={[]} placeholder={state.hashEpisodes[value]} className="flex-item"
                               value={AdvancedFilter1} handleChange={handleChange1}/>
                        <Select Array={[]} placeholder={state.hashEpisodes[value]} className="flex-item"
                                value={AdvancedFilter2} handleChange={handleChange2}/>
                                </>

            );
            case "seasons111":
                return (
                    <>
                        <Select Array={[]} placeholder={state.hashEpisodes[value]} className="flex-item"
                                value={AdvancedFilter1} handleChange={handleChange1}/>
                    </>
                );
            case  "episodes111":
                return (
                    <>
                        <Select Array={[]} placeholder={state.hashEpisodes[value]} className="flex-item"
                                value={AdvancedFilter2} handleChange={handleChange2}/>
                    </>
                );
            default:
                return (
                    <>
                    </>
                );


        }
    };

    if (state.filters.length) {
        return (
            <div className="Flexbox">
                <Select Array={state.filters} placeholder="Filters" value={valueSelect} handleChange={handleChange} className="flex-item"/>
                {DynamicFilters(valueSelect)}
            </div>
        );
    } else {
        return <div>Loading ...</div>;
    }
};

export default AdvanceFilters;