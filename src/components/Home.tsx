import React from "react";
import { useCart } from "../hooks/useCart";
import Curso from "./Curso";

export default function Home() {

    const { data, addToCart} = useCart();

    return (
        <>
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

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