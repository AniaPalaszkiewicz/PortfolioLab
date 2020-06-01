import React from 'react';

export default function Step5({props}) {
    const{counter, handleChange, formData, Minus, Plus}=props;
    return (
        <div>
            <h1>Podsumowanie Twojej darowizny</h1>
            <h3>Oddajesz: {formData.gift}</h3>
            <h5></h5>
            <h5></h5>
            <div>
                <h3>Adres odbioru:</h3>




                <h3>Termin odbioru:</h3>
            </div>
             <div> <button onClick={Minus}>Wstecz</button>
                <button onClick={Plus}>Potwierdź</button>
            </div>
        </div>
    );
}


