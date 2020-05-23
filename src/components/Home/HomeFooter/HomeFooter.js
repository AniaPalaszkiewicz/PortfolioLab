import React from 'react';
import facebook from "../../../assets/Facebook.svg"
import instagram from "../../../assets/Instagram.svg"

export default function HomeFooter() {
    return (
        <div className="footer">
            <span> Copyright by Coders Lab</span>
            <div className="icons">
                <img className="icon" src={facebook} alt=""/>
                <img className="icon" src={instagram} alt=""/>
            </div>
        </div>
    );
}


