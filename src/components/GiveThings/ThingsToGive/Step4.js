import React from 'react';

export default function Step4({props}) {
    const{counter, handleChange, formData, Minus, Plus}=props;
    return (
        <div className="step1">
            <h5>Krok {counter} /4</h5>
            <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
            <form className="form-step4">
                <div>
                    <h3>Adres odbioru:</h3>
                    <label> Ulica <input type="text"/> </label>
                    <label> Miasto <input type="text"/> </label>
                    <label> Kod pocztowy <input type="text"/> </label>
                    <label> Numer telefonu <input type="tel"/> </label>
                </div>
                <div>
                    <h3>Termin odbioru:</h3>
                    <label> Data <input type="date"/> </label>
                    <label> Godzina <input type="time"/> </label>
                    <label> Uwagi dla kuriera <textarea/> </label>
                </div>
            </form>
            {counter>5 ? null : <div>{counter===1 ? null : <button onClick={Minus}>Wstecz</button>}
                <button onClick={Plus}>{counter===5 ? "Potwierdź" : "Dalej"}</button>
            </div>}
        </div>
    );
}


