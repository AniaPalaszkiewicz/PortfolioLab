import React from 'react';
import {NavLink as LinkRouter} from "react-router-dom";

export default function UpperHeader() {
    const activeStyle = {
        border: ' 1px solid yellow'
    };
    return (
        <ul className="header-ul">
            <li><LinkRouter className="navlink" to="/login" activeStyle={activeStyle}>Zaloguj się!</LinkRouter></li>
            <li><LinkRouter className="navlink" to="/register" activeStyle={activeStyle}>Załóż konto!</LinkRouter></li>
        </ul>
    );
}


