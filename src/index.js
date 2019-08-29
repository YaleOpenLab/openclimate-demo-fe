import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router} from 'react-router-dom'
import App from './App';
import "./index.scss";
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
// Manage more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
