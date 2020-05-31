import React, {useState} from 'react';
import Yellow from "../Yellow";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

export default function ThingsToGive() {
    const[counter,setCounter]=useState(1);
    const[formData,setFormData]=useState({});
    const handleChange=e=>{
      setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
    };
    const Minus=()=>{
        setCounter(prev=>prev-1)
    };
    const Plus=()=>{
        setCounter(prev=>prev+1)
    };
    return (
        <>
           { counter>4 ? null : <Yellow counter={counter}/>}
            <div className="thingsToGive">
                {counter ===1 ? <Step1 handleChange={handleChange} formData={formData}/> : null}
                {counter ===2 ? <Step2 handleChange={handleChange} formData={formData}/> : null}
                {counter ===3 ? <Step3 handleChange={handleChange} formData={formData}/> : null}
                {counter ===4 ? <Step4 handleChange={handleChange} formData={formData}/> : null}
                {counter ===5 ? <Step5 handleChange={handleChange} formData={formData}/> : null}
                {counter ===6 ? <Step6 handleChange={handleChange} formData={formData}/> : null}
                <div>{counter===1 ? null : <button onClick={Minus}>Wstecz</button>}
                <button onClick={Plus}>{counter===5 ? "Potwierdź" : "Dalej"}</button>
                </div>


            </div>

        </>
    );
}


