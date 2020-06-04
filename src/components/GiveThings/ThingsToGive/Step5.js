import React from 'react';
import icon1 from "../../../assets/Icon-1.svg"
import icon4 from "../../../assets/Icon-4.svg"
import Firebase from "../../Firebase/Firebase";

export default function Step5({props}) {
    const {counter, handleChange, formData, Minus, Plus} = props;

    const addForm = e => {
        e.preventDefault();
        e.stopPropagation();
        let gifts = Firebase.db.ref('gifts');
        gifts.push(formData);
        Plus();
    };

    return (
        <>
        <div className="step1 step5">
            <h1>Podsumowanie Twojej darowizny</h1>
            <h3>Oddajesz: </h3>
            <h4><img src={icon1} alt=""/> {formData.bags} worki, {formData.gift}</h4>
            <h4><img src={icon4} alt=""/>dla lokalizacji: {formData.localization}</h4>
            <div className="form-step4">
                <div className="resume">
                    <h3>Adres odbioru:</h3>
                    <h4>Ulica <span>{formData.street}</span> </h4>
                    <h4>Miasto <span>{formData.city}</span> </h4>
                    <h4>Kod pocztowy <span>{formData.code}</span> </h4>
                    <h4>Numer telefonu <span>{formData.phone}</span> </h4>
                </div>
                <div className="resume">
                    <h3>Termin odbioru:</h3>
                    <h4>Data <span>{formData.date}</span></h4>
                    <h4>Godzina <span>{formData.hour}</span></h4>
                    <h4>Uwagi dla kuriera <span>{formData.desc}</span></h4>
                </div>
            </div>
        </div>
            <div>
                <button onClick={Minus}>Wstecz</button>
                <button onClick={addForm}>Potwierdzam</button>
            </div>
            </>
    );
}


