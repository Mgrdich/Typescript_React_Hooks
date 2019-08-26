import React from 'react';
import Navbar from "./Components/Navbar";
import {Switch, Route, Redirect} from "react-router";
import {Home} from "./Components/Home";
import {Fav} from "./Components/Fav";
import error from "./Components/error"

export default function App(): JSX.Element {
    return (
        <>
            <section className="container">
                <Navbar/>
                <Switch>
                    <Route path="/Favourites" component={Fav}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/404" component={error} />
                    <Redirect to="/404" />
                </Switch>
            </section>
        </>
    );

}



