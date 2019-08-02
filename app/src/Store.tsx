import React from 'react'

interface IState {
    episodes: [],
    favourites: []
}

interface IAction {
    type: string,
    payload: any
}

const initialState: IState = {
    episodes: [],
    favourites: []
};


export const Store = React.createContext<IState | any>(initialState);

function reducers(state: any, action: IAction) {

    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, episodes: action.payload};
        default:
            return state;
    }
}

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = React.useReducer(reducers, initialState);
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}