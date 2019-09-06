import React from 'react';
import {Store} from "../Store/Store";
import {fetchDataAction,fetchDataFilers} from "../Store/Actions";
import Select from "./Select";



const CardsList = React.lazy(() => import('./Cards'));
export const Home = (): JSX.Element => {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        fetchDataAction(dispatch);
    },[state.episodes.length]);

    React.useEffect(()=>{
        fetchDataFilers(dispatch);
    },[state.filters.length]);

    console.log(state);
    return (
        <>
            <React.Suspense fallback={<div>...Loading</div>}>
                {state.filters.length ? <Select Array={state.filters} placeholder="Filters"/> : null}
                <CardsList/>
            </React.Suspense>
        </>
    );
};
