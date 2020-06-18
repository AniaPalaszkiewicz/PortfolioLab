import React, {useState} from 'react';

export default function Step4({props}) {
    const [errors, setErrors] = useState({
        street: "",
        city: "",
        code: "",
        phone: "",
        date: "",
        hour: ""

    });

    const {counter, handleChange, formData, Minus, Plus} = props;

    const four = () => {
        let street = '';
        let city = "";
        let code = "";
        let phone = "";
        let date = "";
        let hour = "";
        if (formData.street.length < 2) {
            street = "Minimum 2 znaki!"
        }
        if (formData.city < 2) {
            city = "Minimum 2 znaki!"
        }
        if(formData.code.length !== 5){
            code="Kod musi składać się z 5 cyfr!!"
        }
        if(formData.phone.length !== 9){
            phone="Numer musi składać się z 9 cyfr!"
        }
        if(!formData.date || !formData.hour){
            date="Proszę uzupełnić to pole"
        }
        if (street || city || code || phone || date || hour) {
            setErrors({...errors, street: street, city: city, code: code, phone: phone, date : date, hour : date });
            return;
        }
        Plus();
    };

    return (
        <>
        <div className="step1">
            <h5>Krok {counter} /4</h5>
            <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
            <form className="form-step4">
                <div>
                    <h3>Adres odbioru:</h3>
                    <label> Ulica <input onChange={handleChange} value={formData.street} name="street" type="text"/> </label>
                    {errors.street && <p>{errors.street}</p>}
                    <label> Miasto <input onChange={handleChange} value={formData.city} name="city" type="text"/> </label>
                    {errors.city && <p>{errors.city}</p>}
                    <label> Kod pocztowy <input onChange={handleChange} value={formData.code} name="code" type="text"/> </label>
                    {errors.code && <p>{errors.code}</p>}
                    <label> Numer telefonu <input onChange={handleChange} value={formData.phone} name="phone" type="tel"/> </label>
                    {errors.phone && <p>{errors.phone}</p>}
                </div>
                <div>
                    <h3>Termin odbioru:</h3>
                    <label> Data <input onChange={handleChange} value={formData.date} name="date" type="date"/> </label>
                    {errors.date && <p>{errors.date}</p>}
                    <label> Godzina <input onChange={handleChange} value={formData.hour} name="hour" type="time"/> </label>
                    {errors.date && <p>{errors.date}</p>}
                    <label> Uwagi dla kuriera <textarea onChange={handleChange} value={formData.desc} name="desc"/> </label>
                </div>
            </form>

        </div>
            {counter > 5 ? null : <div>{counter === 1 ? null : <button onClick={Minus}>Wstecz</button>}
                <button onClick={four}>{counter === 5 ? "Potwierdź" : "Dalej"}</button>
            </div>}
            </>
    );
}


