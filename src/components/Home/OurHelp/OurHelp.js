import React from 'react';
import decoration from "../../../assets/Decoration.svg"

export default function OurHelp() {
    return (
        <div className="start" id='ourHelp'>
            <div>
                <h1>Komu pomagamy?</h1>
                <img className="decoration" src={decoration} alt=""/>
            </div>
        </div>
    );
}