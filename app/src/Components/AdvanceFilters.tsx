import React from 'react';
import {fetchDataFilers, MapIdArray} from "../Store/Actions";
import {Store} from "../Store/Store";
import Select from "./Select";
import {useSelect} from "../hooks/SelectHook";
import {ArrayUntilNumber, createArrUntil, mapIdObjectArray} from "../utility/functions";
import {useFetch} from "../hooks/FetchingHook";
import {ArrayObjectCheckbox} from "../interfaces";

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
        const {seasonsDrop, episodesDrop} = state.Info;
        if (seasonsDrop.length && Object.keys(episodesDrop.season).length) {

            let Episodes: JSX.Element = <></>;
            const Seasons: JSX.Element = <Select Array={seasonsDrop} placeholder="Seasons" className="flex-item"
                                                 value={AdvancedFilter1} handleChange={handleChange1}/>;

            //only when a value is selected by the
            if (AdvancedFilter1) {
                const Array: Array<number> = ArrayUntilNumber(episodesDrop.season[AdvancedFilter1]);
                let SelectDataEpisodes: ArrayObjectCheckbox[] = createArrUntil(AdvancedFilter1, Array);
                if (Array) {
                    Episodes = <Select Array={SelectDataEpisodes} placeholder="Episodes"
                                       className="flex-item"
                                       value={AdvancedFilter2} handleChange={handleChange2}/>;
                }
            }

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
                default:
                    return (
                        <>
                        </>
                    );


            }
        } else {
            return (<>
            </>)
        }
    };

    if (state.filters.length && state.Info) {
        return (
            <div className="Flexbox spaceBtwn">

                <div className="flex-item">
                    <Select Array={state.filters} placeholder="Filters" value={valueSelect}
                            handleChange={handleChange}
                            className="flex-item"/>
                    {DynamicFilters(valueSelect)}
                </div>
                <div className="flex-item">
                    <button className="btn btn-danger-white m-r-15" onClick={()=>{}}>Submit</button>
                    <button className="btn btns" onClick={(e)=>handleChange(e,true)}>Reset</button>
                </div>
            </div>
        );
    } else {
        return <div>Loading ...</div>;
    }
};

export default AdvanceFilters;