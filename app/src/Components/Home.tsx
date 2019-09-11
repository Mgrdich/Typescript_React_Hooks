import React, {useEffect} from 'react';
import {Store} from "../Store/Store";
import {fetchDataAction, getSeasons} from "../Store/Actions";
import AdvanceFilters from "./AdvanceFilters";
import {useFetch} from "../hooks/FetchingHook";


const CardsList = React.lazy(() => import('./Cards'));

export const Home = (): JSX.Element => {
    const {state, dispatch} = React.useContext(Store);

    console.log(state);
    const {seasonsDrop} = state.Info;
    useEffect(() => {
        if (state.episodes.length && !seasonsDrop.length) {
            console.log("here");
            getSeasons(dispatch,state.episodes)
        }
    });

    useFetch(fetchDataAction, dispatch); //TODO checking api call during every change of router


    return (
        <>
            <React.Suspense fallback={<div>...Loading</div>}>
                <AdvanceFilters/>
                <CardsList/>
            </React.Suspense>
        </>
    );
};
