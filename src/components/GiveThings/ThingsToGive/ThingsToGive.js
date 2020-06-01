import React, {useState} from 'react';
import Yellow from "../Yellow";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

export default function ThingsToGive() {
    const [counter, setCounter] = useState(1);
    const [formData, setFormData] = useState({
        gift: '',
        bags: '0',
        localization: '0',
        whom: [],
        specLocalization: '',
        street: '',
        city: '',
        code: '',
        phone: '',
        date: '',
        hour: '',
        desc: ''
    });
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(prev => ({...prev, [name]: value}))
    };
    const handleCheckbox =(arr)=>{
        console.log(arr);
        setFormData(prev => ({...prev, whom: arr}))

    };
    const Minus = () => {
        setCounter(prev => prev - 1)
    };
    const Plus = () => {
        setCounter(prev => prev + 1)

    };
    const props = {counter, handleChange, formData, Minus, Plus};
    return (
        <>
            {counter > 4 ? null : <Yellow counter={counter}/>}
            <div className="thingsToGive">
                {counter === 1 ? <Step1 props={props}/> : null}
                {counter === 2 ? <Step2 props={props}/> : null}
                {counter === 3 ? <Step3 props={props} handleCheckbox={handleCheckbox}/> : null}
                {counter === 4 ? <Step4 props={props}/> : null}
                {counter === 5 ? <Step5 props={props}/> : null}
                {counter === 6 ? <Step6 props={props}/> : null}


            </div>

        </>
    );
}


