export interface IEpisode {

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



/*-------------Store.tsx interfaces-------------*/
export interface IState {
    episodes: Array<any>
    favourites: Array<any>
}

export interface IAction {
    type: string,
    payload: any
}

export interface IPropsCheckboxList {
    Array:Array<any>,

}

