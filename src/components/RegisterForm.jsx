import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js"
<<<<<<< HEAD
import Sidebar from "./Sidebar.jsx"
import Navbar from "./Navbar.jsx"
=======
import  './RegisterForm.css'
>>>>>>> 36557eb7294c526107c7900bc7de29c608278a10

function RegisterForm () {
    const {user, handleUser } = useContext(productsContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            handleUser(userCredential.user.email);
            console.log(user)
        })
        .catch((err) => {
            const errorCode = err.code
            const errorMessage = err.message
            console.error(errorCode)
            console.error(errorMessage)
        })
    }
    return (
        <>
        <Sidebar />
        <Navbar />

        <form onSubmit={handleSubmit}>
            Crear un usuario
            <div>
                <label>
                    Email: <input type="text" placeholder="email@dominio.com" name="email"/>
                </label>
            </div>
            <div className="Divisor">
             </div>
            <div>
                <label>
                    Password: <input type="password" placeholder="Contraseña" name="password"/>
                </label>
            </div>
            <button type="submit" className="Button">Crear usuario</button>
        </form>
        </>
    )
}

export default RegisterForm;6