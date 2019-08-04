import React from 'react';
import {IEpisode} from "../interfaces";
import {Store} from "../Store";

const Card = (props: IEpisode) => {

    function toggleAction(episode: any) {

        const episodeCheck = state.favourites.find((item: IEpisode) => {
            return episode.id === item.id
        });
        console.log(episodeCheck);
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
        console.log(objDispatch);

        return dispatch(objDispatch)
    }

    const {state, dispatch} = React.useContext(Store);

    const {id, name, season, number, image} = props;
    return (
        <div className="card col-lg-4 col-md-6 col-sm-12" key={id}>
            <img src={image.medium} alt={`Rick and Morty ${name}`}/>
            <div>{name}</div>
            <div>
                Season:{season} Number {number}
                <button
                    className="btn btn-dark"
                    onClick={() => toggleAction(props)}
                >
                    {
                        state.favourites.find((fav: IEpisode) => fav.id === id) ? 'UnFav' : 'Fav'
                    }
                </button>
            </div>
        </div>
    );
};

export default Card;