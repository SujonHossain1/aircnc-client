import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import HomeDetails from './HomeDetails/HomeDetails';

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/home-details/:slug">
            <HomeDetails />
        </Route>
    </Switch>
);

export default Routes;
