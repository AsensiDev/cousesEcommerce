import React from "react";
import { useCart } from "../hooks/useCart";
import Curso from "./Curso";

import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase)

export default function Home() {

    const { data, addToCart} = useCart();

    return (
        <>
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <button onClick={() => signOut(auth)}>LogOut</button>

                <div className="row mt-5">
                    {data.map((curso) => (
                    <Curso 
                        key={curso.id}
                        curso={curso}
                        addToCart={addToCart}
                    />
                    ))}
                </div>
            </main>
        </>
        
    )
}