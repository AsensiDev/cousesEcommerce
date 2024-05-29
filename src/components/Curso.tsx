import type { Curso } from '../types'
import React from 'react'

type CursoProps = {
    curso : Curso, 
    addToCart : (item: Curso) => void
}

export default function Curso({curso, addToCart} : CursoProps) {

    const { name, image, description, price } = curso

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-12"> 
                <img className="img-fluid mb-3" src={`/img/${image}.jpg`} alt="imagen curso" /> 
            </div>
            <div className="col-12"> 
                <h3 className="text-black fs-4 fw-bold text-uppercase mt-3">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">{price}€</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(curso)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}
