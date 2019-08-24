import React from 'react';
import {IEpisode} from "../interfaces";
import {Store} from "../Store/Store";
import Card from "./Card";

export const Fav = () => {

    const {state} = React.useContext(Store);
    if(state.favourites.length===0){
        return (
            <div className="Favourites">
                <div className="header">No Fav has been used</div>
                <div className="btns">Home</div>
            </div>
        )
    }
    return (
        <div className="row">
            {
                state.favourites.map((episode: IEpisode, index: number) => {
                    return (
                        <Card {...episode} key={index}/>
                    );
                })
            }
        </div>
    );
};
