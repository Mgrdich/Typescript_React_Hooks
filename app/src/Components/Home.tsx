import React from 'react';
import {Store} from "../Store/Store";
import {fetchDataAction} from "../Store/Actions";
import AdvanceFilters from "./AdvanceFilters";



const CardsList = React.lazy(() => import('./Cards'));
export const Home = (): JSX.Element => {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        fetchDataAction(dispatch);
    },[state.episodes.length]);

;

    console.log(state);
    return (
        <>
            <React.Suspense fallback={<div>...Loading</div>}>
                <AdvanceFilters/>
                <CardsList/>
            </React.Suspense>
        </>
    );
};
