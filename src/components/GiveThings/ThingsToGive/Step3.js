import React, {useState} from 'react';

export default function Step3({props, handleCheckbox}) {
    const [errors, setErrors] = useState({
        localization: "",
        whom: ""
    });
    const {counter, handleChange, formData, Minus, Plus} = props;
    const three = () => {
        let localization = "";
        let whom = "";
        if (formData.localization === '0' && !formData.specLocalization) {
            localization = "Zaznacz lub wpisz lokalizację!"
        }
        if (!formData.whom[0]) {
            whom = 'Zaznacz jedną z opcji!'
        }
        if (localization || whom) {
            setErrors(prev => ({...prev, localization: localization, whom: whom}));
            return;
        }
        Plus();
    };

    const handleCheckbox1 = e => {
        let arr = formData.whom;
        let el = e.target.value;
        if (arr.includes(el)) {
            arr = arr.filter(element => {
                return element !== el
            })
        } else {
            arr.push(el);
        }
        handleCheckbox(arr);
    };

    return (
        <div className="step1">
            <h5>Krok {counter} /4</h5>
            <h1>Lokalizacja:</h1>
            <form>
                <label>
                    <select onChange={handleChange} name="localization" value={formData.localization}>
                        <option value="0" disabled>-Wybierz-</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                </label>
                {errors.localization && <p>{errors.localization}</p>}
                <h3>Komu chcesz pomóc?</h3>
                <div className={"checkboxDiv"}>
                    <label className="checkbox">
                        <input onClick={handleCheckbox1} type="checkbox" value="dzieciom"
                               checked={formData.whom.includes( "dzieciom" ) ? 'checked' : null}/>

                        <span>dzieciom</span>
                    </label>
                    <label className="checkbox"> <input onClick={handleCheckbox1}
                                                        type="checkbox"
                                                        value="samotnym matkom"
                                                        checked={formData.whom.includes( "samotnym matkom" ) ? 'checked' : null}/>
                    <span>samotnym matkom</span> </label>
                    <label className="checkbox"> <input onClick={handleCheckbox1}
                                                        type="checkbox"
                                                        value="bezdomnym"  checked={formData.whom.includes( "bezdomnym" ) ? 'checked' : null}/><span>bezdomnym </span></label>
                    <label className="checkbox"> <input onClick={handleCheckbox1}
                                                        type="checkbox"
                                                        value="niepełnosprawnym"  checked={formData.whom.includes( "niepełnosprawnym" ) ? 'checked' : null}/><span>niepełnosprawnym</span> </label>
                    <label className="checkbox"> <input onClick={handleCheckbox1}
                                                        type="checkbox"
                                                        value="osobom starszym"  checked={formData.whom.includes( "osobom starszym" ) ? 'checked' : null}/><span>osobom starszym</span>
                    </label>
                    {errors.whom && <p>{errors.whom}</p>}
                </div>
                <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                <label>
                    <input onChange={handleChange} name="specLocalization" value={formData.specLocalization}
                           className="org" type="text"/>
                </label>
                {errors.localization && <p>{errors.localization}</p>}
            </form>
            {counter > 5 ? null : <div>{counter === 1 ? null : <button onClick={Minus}>Wstecz</button>}
                <button onClick={three}>{counter === 5 ? "Potwierdź" : "Dalej"}</button>
            </div>}
        </div>
    );
}


