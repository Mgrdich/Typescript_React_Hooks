import React from 'react';
import {Store} from "../Store/Store";
import {fetchDataAction, MapIdArray} from "../Store/Actions";
import AdvanceFilters from "./AdvanceFilters";
import {mapIdObjectArray} from "../utility/functions";


const CardsList = React.lazy(() => import('./Cards'));
export const Home = (): JSX.Element => {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        fetchDataAction(dispatch);
    }, [state.episodes.length]);


    return (
        <>
            <React.Suspense fallback={<div>...Loading</div>}>
                <AdvanceFilters/>
                <CardsList/>
            </React.Suspense>
        </>
    );
};
