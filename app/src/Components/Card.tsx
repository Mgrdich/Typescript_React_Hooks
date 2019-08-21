import React from 'react';
import {IEpisode} from "../interfaces";
import {Store} from "../Store/Store";
import {toggleAction} from "../Store/Actions";

const Card = (props: IEpisode) => {


    const {state, dispatch} = React.useContext(Store);

    const {id, name, season, number, image} = props;
    return (
        <div className="card special_card col-lg-4 col-md-6 col-sm-12" key={id}>
            <img src={image.medium} alt={`Rick and Morty ${name}`}/>
            <div className="card_header">{name}</div>
            <div className="card_body">
                Season:{season} Number {number}
                <button
                    className="btn btn-dark"
                    onClick={() => toggleAction(state, dispatch, props)}
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