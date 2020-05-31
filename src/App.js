import React, {useState,useEffect} from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import HomeHeader from "./components/HomeHeader";
import Logout from "./components/Logout"
import {withFirebase} from "./components/Firebase";
import Firebase from "./components/Firebase/Firebase"
import {AuthUserContext} from "./components/Session"
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import GiveThings from "./components/GiveThings";



function App() {
    const [authUser, setAuthUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = onAuthStateChange();
        return () => {unsubscribe()}
    },[]);

    if(!authUser){
        console.log('no user');
    }else{
        console.log('user logged');
    }
    function onAuthStateChange () {
        return Firebase.auth.onAuthStateChanged(user => {
            if(user){
                console.log('user is logged in');
                setAuthUser(user)
            }else {
                console.log('user is not logged in');
                setAuthUser(null)
            }
        })
    }


    return <AuthUserContext.Provider value={authUser}>
    <HashRouter>
        <div className="app-container">
            <HomeHeader/>
            <Switch>
                <Route exact path='/' component={Home}  />
                <Route  path='/login' component={Login}  />
                <Route  path='/register' component={Register}  />
                <Route  path='/wylogowano' component={Logout}  />
                <Route  path='/oddaj-rzeczy' component={GiveThings}  />
            </Switch>
        </div>
    </HashRouter>
    </AuthUserContext.Provider>
}

export default withFirebase(App);
