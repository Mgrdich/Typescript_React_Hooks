import React from 'react';
import {Store} from './Store'

interface IEpisode {

    airdate: string
    airstamp: string
    airtime: string
    id: number
    image: { medium: string, original: string }
    name: string
    number: number
    runtime: number
    season: number
    summary: string
    url: string
}

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
        <>
            <h1>Rick and Morty</h1>
            <section>
                {
                    state.episodes.map((episode: IEpisode) => {
                        return (
                            <div key={episode.id}>
                                <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/>
                                <div>{episode.name}</div>
                                <div>
                                    Season:{episode.season} Number {episode.number}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    );
};

export default App;
