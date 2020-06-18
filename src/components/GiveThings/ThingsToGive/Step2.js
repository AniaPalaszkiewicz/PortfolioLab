import React, {useState} from 'react';

export default function Step2({props}) {
    const {counter, handleChange, formData, Minus, Plus} = props;
    const [error, setError] = useState('');
    const two = () => {
        if (formData.bags !== '0') {
            Plus()
        } else {
            setError('Zaznacz jedną z opcji!')
        }
    };
    return (
        <>
        <div className="step1">
            <h5>Krok {counter} /4</h5>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <form>
                <label>
                    Liczba 60l worków: <select onChange={handleChange} name="bags" value={formData.bags}>
                    <option value="0" disabled>-Wybierz-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </label>
            </form>
            {error && <p>{error}</p>}

        </div>
            {counter > 5 ? null : <div>{counter === 1 ? null : <button onClick={Minus}>Wstecz</button>}
                <button onClick={two}>{counter === 5 ? "Potwierdź" : "Dalej"}</button>
            </div>}
            </>
    );
}


