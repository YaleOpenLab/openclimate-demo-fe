import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router} from 'react-router-dom'
import App from './App';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createEpicMiddleware} from "redux-observable";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers";
import {rootEpic} from "./store/epics";
import history from './helpers/history';

const epicMiddleware = createEpicMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);

const routing = (
    <Provider store={store}>
        <BrowserRouter forceRefresh={true}>
            <Router history={history}>
                <App/>
            </Router>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
