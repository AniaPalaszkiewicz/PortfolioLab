import React from 'react';
import decoration from "../../../assets/Decoration.svg"

export default function Step6() {
    return (
        <div className="step6">
        <h1>
            Dziękujemy za przesłanie formularza.
            Na maila prześlemy wszelkie informacje o odbiorze.

        </h1>
        <img className="decoration" src={decoration} alt=""/>
        </div>
    );
}


