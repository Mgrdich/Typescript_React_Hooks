import React from 'react';
import {Store} from "../Store/Store";
import {fetchDataAction,fetchDataFilers} from "../Store/Actions";
import Select from "./Select";



const CardsList = React.lazy(() => import('./Cards'));
export const Home = (): JSX.Element => {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch);
        !state.filters && fetchDataFilers(dispatch);
    });

    console.log(state);
    return (
        <>
            <React.Suspense fallback={<div>...Loading</div>}>
                {state.filters ? <Select Array={state.filters} placeholder="Filters"/> : null}
                <CardsList/>
            </React.Suspense>
        </>
    );
};
