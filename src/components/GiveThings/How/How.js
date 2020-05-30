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
                <h1>Wystarczą 4 proste kroki:</h1>
                <div className="button">
                   <div>1 Wybierz rzeczy</div>
                   <div>2 Spakuj je w worki</div>
                   <div>3 Wybierz fundację</div>
                   <div>4 Zamów kuriera</div>
                </div>
            </div>
        </div>
    );
}


