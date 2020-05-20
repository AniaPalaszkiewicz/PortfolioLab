import React, {useState,useEffect} from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import HomeHeader from "./components/HomeHeader";

function App() {
    return <HashRouter>
        <div className="app-container">
            <HomeHeader/>
            <Switch>
                <Route exact path='/' component={Home}  />
                <Route  path='/login' component={Login}  />
                <Route  path='/register' component={Register}  />
            </Switch>
        </div>

    </HashRouter>;

}

export default App;
