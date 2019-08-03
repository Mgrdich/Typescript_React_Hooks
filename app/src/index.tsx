import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreProvider} from "./Store";
import "bootstrap/dist/css/bootstrap.css";


ReactDOM.render(<StoreProvider><App/></StoreProvider>, document.getElementById('root'));

