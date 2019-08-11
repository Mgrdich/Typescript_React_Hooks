import {IEpisode, IState} from "../interfaces";


export async function fetchDataAction(dispatch: any) {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON._embedded.episodes
    });
};


export function toggleAction(state: IState, dispatch: any, episode: any) {

    const episodeCheck = state.favourites.find((item: IEpisode) => {
        return episode.id === item.id
    });

    let favWithoutEpisode;
    if (episodeCheck) {
        favWithoutEpisode = state.favourites.filter((item: IEpisode) => {
            return item.id !== episode.id
        })
    }
    let objDispatch = Object.assign({},
        episodeCheck && {type: 'REMOVE_FAV', payload: favWithoutEpisode},
        !episodeCheck && {type: 'ADD_FAV', payload: episode}
    );


    return dispatch(objDispatch)
}
