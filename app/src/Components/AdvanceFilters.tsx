import React from 'react';
import {fetchDataFilers, MapIdArray} from "../Store/Actions";
import {Store} from "../Store/Store";
import Select from "./Select";
import {useSelect} from "../hooks/SelectHook";
import {mapIdObjectArray} from "../utility/functions";
import {useFetch} from "../hooks/FetchingHook";

const AdvanceFilters = (): JSX.Element => {
    const [valueSelect, handleChange] = useSelect();
    const [AdvancedFilter1, handleChange1] = useSelect();
    const [AdvancedFilter2, handleChange2] = useSelect();

    const {state, dispatch} = React.useContext(Store);

    useFetch(fetchDataFilers, dispatch);

    React.useEffect(() => {
        MapIdArray(dispatch, mapIdObjectArray(state.filters));
    }, [state.filters.length, dispatch, state.filters]);

    const DynamicFilters = function (value: any): JSX.Element {
        const {seasonsDrop} = state.Info;
        const Episodes: JSX.Element = <Select Array={[]} placeholder="Episodes" className="flex-item"
                                              value={AdvancedFilter2} handleChange={handleChange2}/>;
        const Seasons: JSX.Element = <Select Array={seasonsDrop} placeholder="Seasons" className="flex-item"
                                             value={AdvancedFilter1} handleChange={handleChange1}/>;

        switch (value) {
            case "both111":
                return (
                    <>
                        {Seasons}
                        {Episodes}
                    </>

                );
            case "seasons111":
                return (
                    <>
                        {Seasons}
                    </>
                );
            case  "episodes111":
                return (
                    <>
                        {Episodes}
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
            <div className="Flexbox spaceBtwn">

                <div className="flex-item">
                    <Select Array={state.filters} placeholder="Filters" value={valueSelect}
                            handleChange={handleChange}
                            className="flex-item"/>
                    {DynamicFilters(valueSelect)}
                </div>
                <div className="flex-item">
                    <button className="btn btn-danger m-r-15">Submit</button>
                    <button className="btn btns">Reset</button>
                </div>
            </div>
        );
    } else {
        return <div>Loading ...</div>;
    }
};

export default AdvanceFilters;