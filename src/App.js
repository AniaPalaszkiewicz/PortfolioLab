import React, {useState,useEffect} from 'react';
import HomeHeader from "./components/Home/HomeHeader"
import Home from "./components/Home"
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

function App() {
    return <HashRouter>
        <div className="app-container">
            <HomeHeader/>
            <Switch>
                <Route exact path='/' component={Home}  />

            </Switch>
        </div>

    </HashRouter>;

}

export default App;
