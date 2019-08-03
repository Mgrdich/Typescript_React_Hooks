import React from 'react';
import {Store} from './Store'

const App = (): JSX.Element => {
    const {state, dispatch} = React.useContext(Store);


    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction()
    });

    async function fetchDataAction() {
        const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
        const data = await fetch(URL);
        const dataJSON = await data.json();
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJSON._embedded.episodes
        });
    }

    console.log(state);

    return (
        <div>
            hello
        </div>
    );
};

export default App;
