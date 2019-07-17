import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css'
import * as serviceWorker from './serviceWorker';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import HomePage from './pages/homepage';
import Landing from './pages/landing';
import Tool from './pages/publicTool/tool';
import ActorPage from './pages/actorpage'


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/homepage" component={HomePage} />
      <Route path="/tool" component={Tool} />
      <Route path="/actorpage" component={ActorPage} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
