import React from 'react';
import decoration from "../../assets/Decoration.svg";
import {NavLink as LinkRouter} from "react-router-dom";

export default function Logout() {
    return (
        <div className="login logout">
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
            <img className="decoration" src={decoration} alt=""/>
            <LinkRouter className="navlink" to="/">Strona główna</LinkRouter>
        </div>
    );
}


