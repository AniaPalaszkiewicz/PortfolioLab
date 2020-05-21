import React from 'react';
import {NavLink as LinkRouter} from "react-router-dom";
import {Link} from "react-scroll";
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
            <ul className="header-ul">
                <li><LinkRouter className="navlink" to="/login" activeStyle={activeStyle}>Zaloguj się!</LinkRouter></li>
                <li><LinkRouter className="navlink" to="/register" activeStyle={activeStyle}>Załóż konto!</LinkRouter></li>
            </ul>
            <ul className="header-ul second">
                <li><LinkRouter className="navlink" to="/">Start</LinkRouter></li>
                <li><Link to="threeColumns" {...options}>O co chodzi?</Link></li>
                <li><Link to="aboutUs" {...options}>O nas</Link></li>
                <li><Link to="aboutUs" {...options}>Fundacja i organizacje</Link></li>
                <li><Link to="contact" {...options}>Kontakt</Link></li>
            </ul>
        </div>
    );
}


