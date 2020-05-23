import React from 'react';
import decoration from "../../../assets/Decoration.svg"
import HomeFooter from "../HomeFooter";


export default function Contact() {
    return (
        <div className="section" id='contact'>
            <div className="contact">

            </div>
            <div className="contactForm">
                <h1>Skontaktuj się z nami</h1>
                <img className="decoration" src={decoration} alt=""/>
                <form>
                    <label>
                        Wpisz swoje imię
                        <input type="text" placeholder="Krzysztof"/>
                    </label>
                    <label>
                        Wpisz swój email
                        <input type="email" placeholder="abc@xyz.pl"/>
                    </label>
                    <label>
                        Wpisz swoją wiadomość
                        <textarea rows='5'
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    </label>
                    <input type="submit" value="Wyślij"/>

                </form>
            </div>
            <HomeFooter/>
        </div>
    );
}