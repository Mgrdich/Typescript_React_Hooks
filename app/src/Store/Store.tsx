import React from 'react'
import {IState, IAction} from "../interfaces";

const initialState: IState = {
    episodes: [],
    favourites: [],
    filters: []
};


export const Store = React.createContext<IState | any>(initialState);

function reducers(state: any, action: IAction): IState {

    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, episodes: action.payload};
        case 'ADD_FAV':
            return {...state, favourites: [...state.favourites, action.payload]};
        case 'REMOVE_FAV':
            return {...state, favourites: action.payload};
        case "FETCH_FILTERS":
            return {...state, filters: action.payload};
        case "MAP_ID":
            return {...state, hashEpisodes: action.payload};
        case "GET_SEASONS":
            return  {...state,Info: {
                    seasons:action.payload
                }};
        default:
            return state;
    }
}

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = React.useReducer(reducers, initialState);
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}