import React from 'react';
import decoration from "../../../assets/Decoration.svg";
import {NavLink as LinkRouter} from "react-router-dom";
import icon1 from "../../../assets/Icon-1.svg"
import icon2 from "../../../assets/Icon-2.svg"
import icon3 from "../../../assets/Icon-3.svg"
import icon4 from "../../../assets/Icon-4.svg"

export default function FourSteps() {
    return (
        <div className="foursteps" id='fourSteps'>
            <h1>Wystarczą 4 proste kroki</h1>
            <img className="decoration" src={decoration} alt=""/>
            <div className="threeColumns steps">
                <div>
                <div className="column col">
                    <img src={icon1} alt=""/>
                    <h3>Wybierz rzeczy</h3>
                    <hr/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="column col">
                    <img src={icon2} alt=""/>
                    <h3>Spakuj je</h3>
                    <hr/>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="column col">
                    <img src={icon3} alt=""/>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="column col">
                    <img src={icon4} alt=""/>
                    <h3>Zamów kuriera</h3>
                    <hr/>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
                </div>
            </div>
            <div className="button">
                <LinkRouter className="navlink" to="/login">Oddaj rzeczy</LinkRouter>
            </div>
        </div>
    );
}