import {IEpisode, IState} from "../interfaces";
import {fetchAPI} from "../utility/functions";
import DataJson from "../api/data.json"


export async function fetchDataAction(dispatch: any) {
    const dataJSON = await fetchAPI('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
    return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON._embedded.episodes
    });
};

export function getSeasons(dispatch: any,episodes:any) {

    return dispatch({
        type:'GET_SEASONS',
        
    });

}


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

export async function fetchDataFilers(dispatch: any) {
    // const dataJSON  = await fetchAPI("/api/data.json");
    const dataJSON = await DataJson;
    return dispatch({
        type: 'FETCH_FILTERS',
        payload: dataJSON
    });
}

export function MapIdArray(dispatch: any, obj: any) {
    return dispatch({
        type: 'MAP_ID',
        payload: obj
    })
}

function SeasonNumber(episodes:any):Number{
    return episodes[episodes.length - 1].season;
}