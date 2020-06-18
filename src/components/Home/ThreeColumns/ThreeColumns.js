import React, {useEffect, useState} from 'react';
import Firebase from "../../Firebase/Firebase";

export default function ThreeColumns() {
    const [state, setState] = useState('');

    useEffect(()=>{
        Firebase.db.ref('gifts').on('value', (snapshot) => {
            setState(snapshot.val())
        });
    },[]);

    let organizations = Object.entries(state).length;
    let bags = () => {
        let counter = 0;
        Object.entries(state).forEach(el => {
           counter = counter +  parseInt(el[1].bags)
        });
        return counter;
    };
    console.log(Object.entries(state));

    return (
        <div className="threeColumns" id='threeColumns'>
            <div className="column">
                <h1>{bags()}</h1>
                <h3>oddanych worków</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. </p>
            </div>
            <div className="column">
                <h1>{organizations}</h1>
                <h3>wspartych organizacji</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. </p>
            </div>
            <div className="column">
                <h1>7</h1>
                <h3>zorganizowanych zbiórek</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. </p>
            </div>

        </div>
    );
}