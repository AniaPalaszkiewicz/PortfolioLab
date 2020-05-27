import React from 'react';
import decoration from "../../assets/Decoration.svg";
import {NavLink as LinkRouter} from "react-router-dom";

export default function Register() {
    return (
        <div className="login">
            <h1>Załóż konto</h1>
            <img className="decoration" src={decoration} alt=""/>
            <form>
                <div className="login-form register">
                    <label>
                        Email
                        <input type="email"/>
                    </label>
                    <label>
                        Hasło
                        <input type="password"/>
                    </label>
                    <label>
                        Powtórz hasło
                        <input type="password"/>
                    </label>
                </div>
                <div className="button two">
                    <LinkRouter className="navlink frame" to="/login">Zaloguj się</LinkRouter>
                    <input className="navlink" type="submit" value="Załóż konto"/>
                </div>
            </form>
        </div>
    );
}