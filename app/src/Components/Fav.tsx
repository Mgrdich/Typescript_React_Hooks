import React from 'react';
import {IEpisode} from "../interfaces";
import {Store} from "../Store/Store";
import rick from "../Style/src/rick.svg";
import morty from "../Style/src/morty.svg";
import Card from "./Card";

export const Fav = (): JSX.Element => {

    function randomItemArray(arr: string[]) {
        let arrLength = arr.length;
        let index = RandomNumber(0, arrLength - 1);
        console.log(index);
        return arr[index];

    }

    function RandomNumber(minimum: number, maximum: number): number {

        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

    const arrayPic = [rick, morty];
    const {state} = React.useContext(Store);
    if (state.favourites.length === 0) {
        console.log("ssss");
        return (
            <div className="Favourites">
                <div className="header_pic"><img src={randomItemArray(arrayPic)} alt=""/></div>
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
