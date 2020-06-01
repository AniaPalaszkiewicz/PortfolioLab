import React, {useState} from 'react';

export default function Step1({props}) {
    const {counter, handleChange, formData, Minus, Plus} = props;
    const[error,setError]=useState('');

    const handleChangeGift = e => {
        handleChange(e)

    };
    const one=()=>{
        if(formData.gift) {Plus()
        }else{
            setError('Zaznacz jedną z opcji!')
        }
    };

    return (
        <div className="step1">
            <h5>Krok {counter} /4</h5>
            <h1>Zaznacz co chcesz oddać:</h1>
            <form>
                <label>
                    <input onChange={handleChangeGift} type="radio" name="gift"
                           value="ubrania, które nadają się do ponownego użycia"
                           checked={formData.gift === "ubrania, które nadają się do ponownego użycia" ? 'checked' : null}/>
                    <span>ubrania, które nadają się do ponownego użycia </span></label>
                <label><input onChange={handleChangeGift} type="radio" name="gift" value="ubrania, do wyrzucenia"
                              checked={formData.gift === "ubrania, do wyrzucenia" ? 'checked' : null}/> <span>ubrania, do wyrzucenia</span>
                </label>
                <label><input onChange={handleChangeGift} type="radio" name="gift" value="zabawki"
                              checked={formData.gift === "zabawki" ? 'checked' : null}/> <span>zabawki</span> </label>
                <label><input onChange={handleChangeGift} type="radio" name="gift" value="książki"
                              checked={formData.gift === "książki" ? 'checked' : null}/> <span>książki</span> </label>
                <label> <input onChange={handleChangeGift} type="radio" name="gift" value="inne"
                               checked={formData.gift === "inne" ? 'checked' : null}/> <span>inne</span>
                </label>
            </form>
            {error && <p>{error}</p>}
            {counter > 5 ? null : <div>{counter === 1 ? null : <button onClick={Minus}>Wstecz</button>}
                <button onClick={one}>{counter === 5 ? "Potwierdź" : "Dalej"}</button>
            </div>}
        </div>
    );
}


