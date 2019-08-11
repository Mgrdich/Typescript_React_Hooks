import React from 'react';
import Navbar from "./Components/Navbar";
import {Switch, Route} from "react-router";
import {Home} from "./Components/Home";
import {Fav} from "./Components/Fav";

export default function App(): JSX.Element {
    return (
        <>
            <section className="container">
                <Navbar/>
                <Switch>
                    <Route path="/Favourites" component={Fav}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </section>
        </>
    );

}



