import React from 'react';
import {NavLink as LinkRouter} from "react-router-dom";
import decoration from "../../../assets/Decoration.svg"

export default function Start() {
    return (
        <div className="start">
            <div className="banner" id='start'>
            </div>
            <div className="start-help">
                <h1>Zacznij pomagać!<br></br>
                    Oddaj niechaciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt=""/>
                <div className="button">
                    <ul>
                        <li><LinkRouter className="navlink" to="/login">Oddaj rzeczy</LinkRouter></li>
                        <li><LinkRouter className="navlink" to="/login">Zorganizuj zbiórkę</LinkRouter></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}