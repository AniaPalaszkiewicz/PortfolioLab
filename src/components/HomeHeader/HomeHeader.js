import React from 'react';
import {NavLink as LinkRouter} from "react-router-dom";
import {Link} from "react-scroll";
import {AuthUserContext} from "../Session";
import UpperHeader from "./UpperHeader";
import UpperHeaderLoggedIn from "./UpperHeaderLoggedIn";
const options={
    smooth:true,
    offset:0,
    duration:500
};
export default function HomeHeader() {
    const activeStyle = {
        border: ' 1px solid yellow'
    };

    return (
        <div className="section header">
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <UpperHeaderLoggedIn/> : <UpperHeader/>
                }
            </AuthUserContext.Consumer>
            <ul className="header-ul second">
                <li><LinkRouter className="navlink" to="/">Start</LinkRouter></li>
                <li><Link to="fourSteps" {...options}>O co chodzi?</Link></li>
                <li><Link to="aboutUs" {...options}>O nas</Link></li>
                <li><Link to="ourHelp" {...options}>Fundacja i organizacje</Link></li>
                <li><Link to="contact" {...options}>Kontakt</Link></li>
            </ul>
        </div>
    );
}


