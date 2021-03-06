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
    favourites: Array<any>,
    filters: Array<any>,
    Info: {
        seasonsDrop: Array<any>,
        episodesDrop: {
            season: any
        }
    },
    filteredEpisodes:Array<any>
}

export interface IAction {
    type: string,
    payload: any
}

export interface ArrayObjectCheckbox {
    "name": string,
    "id": number | string
}

export interface IPropsSelect {
    Array: Array<ArrayObjectCheckbox>,
    placeholder: string,
    multiple?: boolean,
    className?: string,
    value?: string,
    handleChange?: any
}
