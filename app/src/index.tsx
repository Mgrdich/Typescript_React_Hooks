import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StoreProvider} from "./Store/Store";
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter} from "react-router-dom";
import "../src/Style/style.css"



ReactDOM.render(<StoreProvider><BrowserRouter><App/></BrowserRouter></StoreProvider>, document.getElementById('root'));

