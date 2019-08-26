import React from 'react';
import {IEpisode} from "../interfaces";
import {Store} from "../Store/Store";
import rick from "../Style/src/rick.svg";
import morty from "../Style/src/morty.svg";
import Card from "./Card";
import Unfortunately from "./unfortunately";

export const Fav = (): JSX.Element => {


    const arrayPic = [rick, morty];
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
