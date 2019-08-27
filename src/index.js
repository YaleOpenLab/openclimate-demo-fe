import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router} from 'react-router-dom'
import App from './App';
import "./index.scss";
import HomePage from './pages/homepage/homepage';
import Landing from './pages/landing';
import Tool from './pages/homepage/publicTool/tool';
import ActorPage from './pages/actorpage';
import TradePage from './pages/Trade';
import Dashboard from './pages/homepage/Dashboard';
import Review from './pages/homepage/Review';
import Manage from './pages/homepage/Manage';
import history from './helpers/history';

const routing = (
    <BrowserRouter forceRefresh={true}>
        <Router history={history}>
            <App/>
        </Router>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
