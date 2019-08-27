import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StoreProvider} from "./Store/Store";
import "bootstrap/dist/css/bootstrap.css";
import {Router} from "react-router-dom";
import "../src/Style/style.css"
import history from"./utility/history"


ReactDOM.render(<StoreProvider><Router
    history={history}><App/></Router></StoreProvider>, document.getElementById('root'));

