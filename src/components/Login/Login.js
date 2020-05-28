import React, {useState} from 'react';
import decoration from "../../assets/Decoration.svg";
import {NavLink as LinkRouter} from "react-router-dom";

export default function Login() {
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const handleChange = e => {
        e.preventDefault();
        setErrors({
            email: "",
            password: ""
        });
        setLogin({...login, [e.target.name]: e.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let email = "";
        let password = "";
        const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
        if(!login.email.match(reg)){
            email= "Podany email jest nieprawidłowy"
        }
        if(login.password.length < 6){
            password="Podane hasło jest za krótkie"
        }
        if(email || password){
            setErrors({...errors,email:email, password:password});
            return;
        }
        setLogin({
            email:"",
            password:""
        });
        setErrors({
            email:"",
            password:""
        });
    };
    return (
        <div className="login">
            <h1>Zaloguj się</h1>
            <img className="decoration" src={decoration} alt=""/>
            <form onSubmit={handleSubmit}>
                <div className="login-form">
                    <label>
                        Email
                        <input onChange={handleChange} name="email" type="email" value={login.email}/>
                        {errors.email && <p>{errors.email}</p>}
                    </label>
                    <label>
                        Hasło
                        <input onChange={handleChange} type="password" name="password" value={login.password}/>
                        {errors.password && <p>{errors.password}</p>}
                    </label>
                </div>
                <div className="button two">
                    <LinkRouter className="navlink frame" to="/register">Załóż konto</LinkRouter>
                    <input className="navlink" type="submit" value="Zaloguj się"/>
                </div>
            </form>
        </div>
    );
}