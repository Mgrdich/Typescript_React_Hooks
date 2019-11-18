import React, {useEffect} from 'react';
import {Store} from "../Store/Store";
import {fetchDataAction, getEpisodesALL, getSeasons} from "../Store/Actions";
import AdvanceFilters from "./AdvanceFilters";
import {useFetch} from "../hooks/FetchingHook";


const CardsList = React.lazy(() => import('./Cards'));

export const Home:React.FC = () => {
    const {state, dispatch} = React.useContext(Store);

    const {seasonsDrop} = state.Info;
    console.log("Render");
    useEffect(() => {
        if (state.filteredEpisodes.length && !seasonsDrop.length) {
            getSeasons(dispatch,state.episodes);
            getEpisodesALL(dispatch,state.episodes);
        }
    },[state.episodes,dispatch]);

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
