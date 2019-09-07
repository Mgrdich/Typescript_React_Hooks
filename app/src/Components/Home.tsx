import React from 'react';
import {Store} from "../Store/Store";
import {fetchDataAction, MapIdArray} from "../Store/Actions";
import AdvanceFilters from "./AdvanceFilters";


const CardsList = React.lazy(() => import('./Cards'));

export const Home = (): JSX.Element => {
    const {dispatch} = React.useContext(Store);

    React.useEffect(() => {
        console.log("i am in");
        fetchDataAction(dispatch);
    }, []);


    return (
        <>
            <React.Suspense fallback={<div>...Loading</div>}>
                <AdvanceFilters/>
                <CardsList/>
            </React.Suspense>
        </>
    );
};
