import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Home from './containers/AppContainer/index';
import SearchContainer from './containers/SearchContainer/index';

const Routes = () => {
    return(<Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/search' component={SearchContainer}></Route>
    </Switch>);
} 

export default Routes;