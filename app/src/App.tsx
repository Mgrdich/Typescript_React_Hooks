import React from 'react';
import {Store} from './Store'
import {IEpisode, IAction} from "./interfaces";

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

    function toggleAction(episode: any) {

        const episodeCheck = state.favourites.includes(episode);
        console.log(episodeCheck);
        let favWithoutEpisode;
        if (episodeCheck) {
             favWithoutEpisode = state.favourites.filter((item: any) => {
                return item.id !== episode.id
            })
        }
        let objDispatch  = Object.assign({},
                    episodeCheck && {type:'REMOVE_FAV',payload:favWithoutEpisode},
                    !episodeCheck && {type:'ADD_FAV',payload:episode}

            );
        console.log(objDispatch);

        return dispatch(objDispatch)
    }
    console.log(state);
    return (
        <>
            <section className="container">
                <h1>Rick and Morty</h1>

                <div className="row">
                    {
                        state.episodes.map((episode: IEpisode) => {
                            return (
                                <div className="card col-lg-4 col-md-6 col-sm-12" key={episode.id}>
                                    <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/>
                                    <div>{episode.name}</div>
                                    <div>
                                        Season:{episode.season} Number {episode.number}
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => toggleAction(episode)}
                                        >Fav
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }</div>
            </section>
        </>
    );
};

export default App;
