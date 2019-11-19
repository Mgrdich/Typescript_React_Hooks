import React, {useCallback} from 'react';
import {fetchDataFilers, filterArray, filterArrayResetAction, MapIdArray} from "../Store/Actions";
import {Store} from "../Store/Store";
import Select from "./Select";
import {useSelect} from "../hooks/SelectHook";
import {ArrayUntilNumber, createArrUntil, mapIdObjectArray} from "../utility/functions";
import {useFetch} from "../hooks/FetchingHook";
import {ArrayObjectCheckbox} from "../interfaces";


interface objectType   {
    arr:any;
    handle:Function;
}
const DynamicFilters = function (value: any , info:any,obj1:objectType,obj2:objectType): JSX.Element {
    const {seasonsDrop, episodesDrop} = info;
    if (seasonsDrop.length && Object.keys(episodesDrop.season).length) {


        let Episodes: JSX.Element = <></>;
        const Seasons: JSX.Element = <Select Array={seasonsDrop} placeholder="Seasons" className="flex-item"
                                             value={obj1.arr} handleChange={obj1.handle}/>;

        //only when a value is selected by the
        if (obj1.arr) {
            const Arrays: Array<number> = ArrayUntilNumber(episodesDrop.season[obj1.arr]);
            let SelectDataEpisodes: ArrayObjectCheckbox[] = createArrUntil(obj1.arr, Arrays);
            if (Arrays.length) {
                Episodes = <Select Array={SelectDataEpisodes} placeholder="Episodes"
                                   className="flex-item"
                                   value={obj2.arr} handleChange={obj2.handle}/>;
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


const AdvanceFilters = (): JSX.Element => {
    const [valueSelect, handleChange] = useSelect();
    const [AdvancedFilter1, handleChange1] = useSelect();
    const [AdvancedFilter2, handleChange2] = useSelect();


    const {state, dispatch} = React.useContext(Store);


    useFetch(fetchDataFilers, dispatch);

    React.useEffect(() => {
        MapIdArray(dispatch, mapIdObjectArray(state.filters));
    }, [state.filters.length, dispatch, state.filters]);


    const filteringArraySubmit = useCallback(function (AdvancedFilter1:any, AdvancedFilter2:any, array:any,value:string) {
        let a = AdvancedFilter1.length - 1;
        let a1 = parseInt(AdvancedFilter1[a]);
        if (value==='both111') {
            let b = AdvancedFilter2.length - 1;
            let a2 = parseInt(AdvancedFilter2[b]);
            filterArray(dispatch, array, ["number", "season"], [a2,a1]);
        } else if (AdvancedFilter1) {
            filterArray(dispatch, array, ["season"], [a1]);
        }
    }, [AdvancedFilter1, AdvancedFilter2, state.episodes, dispatch,valueSelect]);

    const filteringArrayReset = useCallback(function (e: any) {
        handleChange(e, true);
        handleChange1(e, true); //to reset the values
        handleChange2(e, true);
        filterArrayResetAction(dispatch);
    }, [dispatch]);

    if (state.filters.length && state.Info) {
        return (
            <div className="Flexbox spaceBtwn">

                <div className="flex-item">
                    <Select Array={state.filters} placeholder="Filters" value={valueSelect}
                            handleChange={handleChange}
                            className="flex-item"/>
                    {DynamicFilters(valueSelect, state.Info, {arr:AdvancedFilter1, handle:handleChange1}, {
                        arr:AdvancedFilter2,
                        handle:handleChange2
                    })}
                </div>
                <div className="flex-item">
                    <button className="btn btn-danger-white m-r-15"
                            onClick={() => filteringArraySubmit(AdvancedFilter1, AdvancedFilter2, state.episodes,valueSelect)}
                            disabled={!AdvancedFilter1}>Submit
                    </button>
                    <button className="btn btns" onClick={(e) => filteringArrayReset(e)}>Reset</button>
                </div>
            </div>
        );
    } else {
        return <div>Loading ...</div>;
    }
};

export default AdvanceFilters;