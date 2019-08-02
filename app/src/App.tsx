import React from 'react';
import {Store} from './Store'

const App: React.FC = () => {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction()
    }, []);

    const fetchDataAction = async () => {
        const URL = '';
        const data = await fetch(URL);
        const dataJSON = await data.json();
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJSON._embedded.episodes
        })
    };

    console.log(state);
    return (
        <div>
            hello
        </div>
    );
};

export default App;
