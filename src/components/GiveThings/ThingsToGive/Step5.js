import React from 'react';
import icon1 from "../../../assets/Icon-1.svg"
import icon4 from "../../../assets/Icon-4.svg"

export default function Step5({props}) {
    const {counter, handleChange, formData, Minus, Plus} = props;
    return (
        <div className="step1 step5">
            <h1>Podsumowanie Twojej darowizny</h1>
            <h3>Oddajesz: </h3>
            <h4><img src={icon1} alt=""/> {formData.bags} worki, {formData.gift}</h4>
            <h4><img src={icon4} alt=""/>dla lokalizacji: {formData.localization}</h4>
            <div className="form-step4">
                <div className="resume">
                    <h3>Adres odbioru:</h3>
                    <h4>Ulica {formData.street} </h4>
                    <h4>Miasto {formData.city} </h4>
                    <h4>Kod pocztowy {formData.code} </h4>
                    <h4>Numer telefonu {formData.phone} </h4>
                </div>
                <div className="resume">
                    <h3>Termin odbioru:</h3>
                    <h4>Data {formData.date}</h4>
                    <h4>Godzina {formData.hour}</h4>
                    <h4>Uwagi dla kuriera {formData.desc}</h4>
                </div>
            </div>
            <div>
                <button onClick={Minus}>Wstecz</button>
                <button onClick={Plus}>Potwierdzam</button>
            </div>

        </div>
    );
}


