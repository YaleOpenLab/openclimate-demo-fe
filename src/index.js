import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css'
import * as serviceWorker from './serviceWorker';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import HomePage from './pages/homepage/homepage';
import Landing from './pages/landing';
import Tool from './pages/homepage/publicTool/tool';
import ActorPage from './pages/actorpage';
import TradePage from './pages/Trade';
import Dashboard from './pages/homepage/Dashboard';
import Review from './pages/homepage/Review';
import Manage from './pages/homepage/Manage';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/homepage" component={HomePage} />
      <Route path="/tool" component={Tool} />
      <Route path="/actorpage" component={ActorPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/review" component={Review} />
      <Route path="/manage" component={Manage} />
      <Route path="/trade" component={TradePage} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
