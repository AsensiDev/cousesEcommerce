import React, {useState} from "react";

import appFirebase from "../credenciales";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

export default function Register() {

    const [registrando, setRegistrando] = useState(false)

    const functAutenticacion = async(e) => {
        e.preventDefault()

        const correo = e.target.email.value
        const password = e.target.password.value

        if(registrando) {
            await createUserWithEmailAndPassword(auth, correo, password)
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, password)
            } catch (error) {
                alert('El correo o la contraseña con incorrectos')
            }
            
        }
    }


    return (
        <form className="formulario" onSubmit={functAutenticacion}>
            <input type="text" placeholder="Ingrese Email" id="email"/>
            <input type="password" placeholder="Ingrese Contraseña" id="password"/>
            <button type="submit">{registrando ? "Regístrate" : "Inicia Sesión"}</button>
            <h4>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
                <button onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia Sesión" : "Regístrate"}</button>
            </h4>
        </form>
    );
}