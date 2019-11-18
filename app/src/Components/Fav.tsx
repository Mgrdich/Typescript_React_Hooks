import React from 'react';
import {IEpisode} from "../interfaces";
import {Store} from "../Store/Store";
import Card from "./Card";
import Unfortunately from "./unfortunately";
import {arrayPic} from "../utility/Globals";

export const Fav:React.FC = () => {


    const {state} = React.useContext(Store);
    if (state.favourites.length === 0) {
        return (
            <Unfortunately mainClass="Favourites" customStuff={{arrayPic}} title="No Fav has been used"/>
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
