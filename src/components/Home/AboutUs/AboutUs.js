import React from 'react';
import decoration from "../../../assets/Decoration.svg"
import sign from "../../../assets/Signature.svg"


export default function AboutUs() {
    return (
        <div className="start" id='aboutUs'>
            <div className="start-help aboutUs">
                <h1>O nas</h1>
                <img className="decoration" src={decoration} alt=""/>
                <div>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                </div>
                <img className="sign" src={sign} alt=""/>
            </div>
            <div className="banner people">
            </div>
        </div>
    );
}