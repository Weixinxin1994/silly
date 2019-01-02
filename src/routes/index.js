import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Home from './home/components/Home';
import Login from './login/components/Login';

const BasicRoute=()=>(
    <HashRouter>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/" component={Login}/>
        </Switch>
    </HashRouter>
)
export default BasicRoute;

