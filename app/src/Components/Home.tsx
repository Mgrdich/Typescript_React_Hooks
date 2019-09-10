import React from 'react';
import {Store} from "../Store/Store";
import {fetchDataAction} from "../Store/Actions";
import AdvanceFilters from "./AdvanceFilters";
import {useFetch} from "../hooks/FetchingHook";


const CardsList = React.lazy(() => import('./Cards'));

export const Home = (): JSX.Element => {
    const {dispatch} = React.useContext(Store);

    useFetch(fetchDataAction, dispatch);

    return (
        <>
            <React.Suspense fallback={<div>...Loading</div>}>
                <AdvanceFilters/>
                <CardsList/>
            </React.Suspense>
        </>
    );
};
