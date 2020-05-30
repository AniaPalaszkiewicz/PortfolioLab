// import React, {useState} from 'react';
// import {NavLink as LinkRouter, withRouter} from "react-router-dom";
//
//
// export default function ({firebase}) {
//     const [errors, setErrors] = useState({
//         email: "",
//         password: "",
//         password2:""
//     });
//     const [register, setRegister] = useState({
//         email: "",
//         password: "",
//         password2:""
//     });
//     const handleChange = e => {
//         e.preventDefault();
//         setErrors({
//             email: "",
//             password: "",
//             password2:""
//         });
//         setRegister({...register, [e.target.name]: e.target.value})
//     };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         let email = "";
//         let password = "";
//         let password2="";
//         const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
//         if(!register.email.match(reg)){
//             email= "Podany email jest nieprawidłowy"
//         }
//         if(register.password.length < 6 || !register.password){
//             password="Podane hasło jest za krótkie"
//         }
//         if((register.password2.length < 6 && register.password !== register.password2) || !register.password2){
//             password2="Podane hasła są różne"
//         }
//         if(email || password || password2){
//             setErrors({...errors,email:email, password:password, password2:password2});
//             return;
//         }
//         firebase
//             .doCreateUserWithEmailAndPassword(email, password)
//             .then(authUser=> {
//
//                 setRegister({
//                     email: "",
//                     password: "",
//                     password2: ""
//                 });
//                 setErrors({
//                     email: "",
//                     password: "",
//                     password2: ""
//                 });
//             })
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="login-form register">
//                 <label>
//                     Email
//                     <input onChange={handleChange} name="email" type="email" value={register.email}/>
//                     {errors.email && <p>{errors.email}</p>}
//                 </label>
//                 <label>
//                     Hasło
//                     <input onChange={handleChange} type="password" name="password" value={register.password}/>
//                     {errors.password && <p>{errors.password}</p>}
//                 </label>
//                 <label>
//                     Powtórz hasło
//                     <input onChange={handleChange} type="password" name="password2" value={register.password2}/>
//                     {errors.password2 && <p>{errors.password2}</p>}
//                 </label>
//             </div>
//             <div className="button two">
//                 <LinkRouter className="navlink frame" to="/login">Zaloguj się</LinkRouter>
//                 <input className="navlink" type="submit" value="Załóż konto"/>
//             </div>
//         </form>
//     );
// }
//
//
