import React from 'react';
import {IEpisode} from "../interfaces";
import {Store} from "../Store/Store";
import Card from "./Card";

const Cards = () => {
    const {state} = React.useContext(Store);

    return (
        <div className="row">
            {
                state.episodes.map((episode: IEpisode, index: number) => {
                    return (
                        <Card {...episode} key={index}/>
                    );
                })
            }
        </div>
    );
};

export default Cards;