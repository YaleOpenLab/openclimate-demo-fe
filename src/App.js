import React from 'react';
import {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import Routes from "./routes/routes";
import HomePage from './pages/homepage/homepage';
import Landing from './pages/landing';
import Tool from './pages/homepage/publicTool/tool';
import ActorPage from './pages/actorpage';
import TradePage from './pages/Trade';
import Dashboard from './pages/homepage/Dashboard';
import Review from './pages/homepage/Review';
import Manage from './pages/homepage/Manage';
import PrivateRoute from "./routes/PrivateRouter";


class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/homepage" component={HomePage} />
                <Route path="/tool" component={Tool} />
                <Route path="/actorpage" component={ActorPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/review" component={Review} />
                <Route path="/manage" component={Manage} />
                <Route path="/trade" component={TradePage} />
            </Switch>
        );
    }
}

export default App;