import React from 'react';
import decoration from "../../../assets/Decoration.svg";
import {NavLink as LinkRouter} from "react-router-dom";

export default function How() {
    return (
        <div className="start">
            <div className="banner ban">
            </div>
            <div className="start-help">
                <h1>Oddaj rzeczy, których już nie chcesz<br></br>
                    POTRZEBUJĄCYM</h1>
                <img className="decoration" src={decoration} alt=""/>
                <h2>Wystarczą 4 proste kroki:</h2>
                <div className="buttonOne">
                    <div>1 <span>Wybierz rzeczy</span></div>
                    <div>2 <span>Spakuj je w worki</span></div>
                    <div>3 <span>Wybierz fundację</span></div>
                    <div>4 <span>Zamów kuriera</span></div>
                </div>
            </div>
        </div>
    );
}


