import React from 'react';
import {NavLink as LinkRouter} from "react-router-dom";
import decoration from "../../../assets/Decoration.svg"
import {AuthUserContext} from "../../Session";

export default function Start() {
    return (
        <div className="start">
            <div className="banner" id='start'>
            </div>
            <div className="start-help">
                <h1>Zacznij pomagać!<br></br>
                    Oddaj niechaciane rzeczy w zaufane ręce</h1>
                <img className="decoration" src={decoration} alt=""/>
                <div className="button">
                    <AuthUserContext.Consumer>
                        {authUser =>
                            <ul>
                                <li><LinkRouter className="navlink" to= {authUser ? "/oddaj-rzeczy": "/login"}>Oddaj rzeczy</LinkRouter></li>
                                <li><LinkRouter className="navlink" to= {authUser ? "/oddaj-rzeczy": "/login"}>Zorganizuj zbiórkę</LinkRouter></li>
                            </ul>
                        }
                    </AuthUserContext.Consumer>

                </div>
            </div>
        </div>
    );
}