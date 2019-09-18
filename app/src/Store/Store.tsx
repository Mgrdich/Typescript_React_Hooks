import React from 'react'
import {IState, IAction} from "../interfaces";
import {ActionTypes} from "./ActionTypes";

const initialState: IState = {
    episodes: [],
    favourites: [],
    filters: [],
    Info: {seasonsDrop: []}
};


export const Store = React.createContext<IState | any>(initialState);

function reducers(state: any, action: IAction): IState {

    switch (action.type) {
        case ActionTypes.FETCH_DATA:
            return {...state, episodes: action.payload, filteredEpisodes: action.payload};
        case ActionTypes.ADD_FAV:
            return {...state, favourites: [...state.favourites, action.payload]};
        case ActionTypes.REMOVE_FAV:
            return {...state, favourites: action.payload};
        case ActionTypes.FETCH_FILTERS:
            return {...state, filters: action.payload};
        case ActionTypes.MAP_ID:
            return {...state, hashEpisodes: action.payload};
        case ActionTypes.GET_SEASONS:
            return {
                ...state, Info: {
                    seasonsDrop: action.payload
                }
            };
        case ActionTypes.GET_EPISODES: { /*here hava all of the episodes change it with the hash function*/
            return {
                ...state, Info: {
                    ...state.Info,
                    episodes: action.payload
                }
            };
        }
        default:
            return state;
    }
}

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = React.useReducer(reducers, initialState);
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}