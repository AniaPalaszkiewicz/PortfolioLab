import React from 'react';
import decoration from "../../assets/Decoration.svg";
import {NavLink as LinkRouter} from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <h1>Zaloguj się</h1>
            <img className="decoration" src={decoration} alt=""/>
            <form>
                <div className="login-form">
                    <label>
                        Email
                        <input type="email"/>
                    </label>
                    <label>
                        Hasło
                        <input type="password"/>
                    </label>
                </div>
                <div className="button two">
                    <LinkRouter className="navlink frame" to="/register">Załóż konto</LinkRouter>
                    <input className="navlink" type="submit" value="Zaloguj się"/>
                </div>
            </form>
        </div>
    );
}