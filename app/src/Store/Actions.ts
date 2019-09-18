import {IEpisode, IState} from "../interfaces";
import {fetchAPI, ObjValueCounter} from "../utility/functions";
import DataJson from "../api/data.json"
import {SelectObjectCreator} from "../utility/functions";
import {ActionTypes} from "./ActionTypes";


export async function fetchDataAction(dispatch: any) {
    const dataJSON = await fetchAPI('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
    return dispatch({
        type: ActionTypes.FETCH_DATA,
        payload: dataJSON._embedded.episodes
    });
}

export function getSeasons(dispatch: any, episodes: any) { // mix this to gets together so it only have to do this once

    return dispatch({
        type: ActionTypes.GET_SEASONS,
        payload: SelectObjectCreator(SeasonNumber(episodes), "season")
    });

}

export function getEpisodesALL(dispatch: any, episodes: any) {

    return dispatch({
        type: ActionTypes.GET_EPISODES,
        payload: EpisodesMaping(episodes)
    })
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
        episodeCheck && {type: ActionTypes.REMOVE_FAV, payload: favWithoutEpisode},
        !episodeCheck && {type: ActionTypes.ADD_FAV, payload: episode}
    );
    return dispatch(objDispatch)
}

export async function fetchDataFilers(dispatch: any) {
    // const dataJSON  = await fetchAPI("/api/data.json");
    const dataJSON = await DataJson;
    return dispatch({
        type: ActionTypes.FETCH_FILTERS,
        payload: dataJSON
    });
}

export function MapIdArray(dispatch: any, obj: any) {
    return dispatch({
        type: ActionTypes.MAP_ID,
        payload: obj
    })
}

function SeasonNumber(episodes: any): Number {
    return episodes[episodes.length - 1].season;
}

function EpisodesMaping(episodes: any) {
    let episodesData: any = {season: {}};
    for (let i = 1; i <= episodes[episodes.length - 1].season; i++) {
        episodesData.season[i] = ObjValueCounter("season", i, episodes);
    }
    return episodesData;
}