import React, {useState, useEffect} from 'react';
import decoration from "../../../assets/Decoration.svg"
import HomeFooter from "../HomeFooter";


export default function Contact() {
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
        success: ""
    });
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleChange = (e) => {
        e.preventDefault();
        setErrors({
            name: "",
            email: "",
            message: "",
            success: ""
        });
        setContact({...contact, [e.target.name]: e.target.value})
    };

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response;
    }

    const createNewContact = (contact) => {
        fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {"Content-Type": "application/json"},

        }).then(handleErrors)
            .then(function (response) {
                console.log("ok");
            }).catch(function (error) {
            console.log(error);
        })

    };


    const handleSubmit = (event) => {
        event.preventDefault();
        let name = '';
        let email = '';
        let message = '';
        if (contact.name.includes(" ") || !contact.name) {
            name = "Podane imię jest nieprawidłowe!"
        }
        const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
        if (!contact.email.match(reg)) {
            email = "Podany email jest nieprawidłowy!"
        }
        if (contact.message.length < 120) {
            message = "Wiadomość musi mieć conajmniej 120 znaków!"
        }
        if (name || email || message) {
            setErrors({...errors, name: name, email: email, message: message});
            return;
        }

        createNewContact(contact);

        setContact({
            name: "",
            email: "",
            message: "",
        });
        setErrors({
            name: "",
            email: "",
            message: "",
            success: "Wiadomość została wysłana! Wkrótce się skontaktujemy."
        });
    };

    return (
        <div className="section" id='contact'>
            <div className="contact">
            </div>
            <div className="contactForm">
                <h1>Skontaktuj się z nami</h1>
                <img className="decoration" src={decoration} alt=""/>
                <form onSubmit={handleSubmit}>
                    {errors.success && <div><p>{errors.success}</p></div>}
                    <label>
                        Wpisz swoje imię
                        <input onChange={handleChange} type="text" placeholder="Krzysztof" name="name"
                               value={contact.name}/>
                        {errors.name && <p>{errors.name}</p>}
                    </label>
                    <label>
                        Wpisz swój email
                        <input onChange={handleChange} type="text" placeholder="abc@xyz.pl" name="email"
                               value={contact.email}/>
                        {errors.email && <p>{errors.email}</p>}
                    </label>
                    <label>
                        Wpisz swoją wiadomość
                        <textarea onChange={handleChange} rows='5' name="message" value={contact.message}
                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        {errors.message && <p>{errors.message}</p>}
                    </label>
                    <input type="submit" value="Wyślij"/>

                </form>
            </div>
            <HomeFooter/>
        </div>
    );
}