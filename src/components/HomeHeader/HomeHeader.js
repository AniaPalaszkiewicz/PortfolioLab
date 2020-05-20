import React from 'react';
import {NavLink as LinkRouter} from "react-router-dom";
import {Link} from "react-scroll";

export default function HomeHeader() {
    const activeStyle = {
        border: ' 1px solid yellow'
    };
    const activeStyle1 = {
        border: ' 1px solid gray'
    };

    return (
        <div className="homeheader">
            <ul className="header-ul">
                <li><LinkRouter className="navlink" to="/login" activeStyle={activeStyle}>Zaloguj się!</LinkRouter></li>
                <li><LinkRouter className="navlink" to="/register" activeStyle={activeStyle}>Zarejestruj się!</LinkRouter></li>
            </ul>
            <ul>
                <li><LinkRouter className="navlink" to="/" activeStyle={activeStyle1}>Start</LinkRouter></li>
                <li><Link to="threeColumns" smooth={true} offset={0} duration={500}>O co chodzi?</Link></li>
                <li><Link to="aboutUs" smooth={true} offset={0} duration={500}>O nas</Link></li>
                <li><Link to="aboutUs" smooth={true} offset={0} duration={500}>Fundacja i organizacje</Link></li>
                <li><Link to="contact" smooth={true} offset={0} duration={500}>Kontakt</Link></li>
            </ul>
        </div>
    );
}


