import React from 'react';
import {NavLink as LinkRouter, useHistory} from "react-router-dom";
import Firebase from "../Firebase/Firebase";


export default function UpperHeaderLoggedIn() {
   const email= Firebase.auth.currentUser.email;

    const history = useHistory();
    const activeStyle = {
        border: ' 1px solid yellow'
    };
    const handleClick = () => {
        Firebase
            .logout()
            .then(() => {
                history.push('/wylogowano')
            })
            .catch(error =>
                alert(error.message));
    };
    return (
        <ul className="header-ul">
            <li className="li li2"> Cześć {email}</li>
            <li ><LinkRouter className="navlink li2" to="/oddaj-rzeczy" activeStyle={activeStyle}>Oddaj rzeczy</LinkRouter>
            </li>
            <li className="li" onClick={handleClick}>Wyloguj</li>
        </ul>
    );
}


