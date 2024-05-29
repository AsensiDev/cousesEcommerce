import type { CartItem, Curso } from "../types"
import React from 'react';

type HeaderProps = {
    cart: CartItem[]
    removeFromCart: (id: Curso['id'] ) => void
    decreaseQuantity: (id: Curso['id'] ) => void
    increaseQuantity: (id: Curso['id'] ) => void
    clearCart: () => void
    isEmpty: boolean
    cartTotal: number
}

export default function Header({
        cart, 
        removeFromCart, 
        decreaseQuantity, 
        increaseQuantity, 
        clearCart,
        isEmpty, 
        cartTotal
    } : HeaderProps ) {
    return (
        <header className="header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                    <a href="/ecommercecursos">
                        <img className="logo"  src="/img/universae-logo.webp" alt="imagen logo" />
                    </a>
                    </div>
                    <nav className="col-md-6  d-flex align-items-center justify-content-end gap-4">
                        <div>
                            <a href="/ecommercecursos" className="text-decoration-none text-dark mr-5 fw-bold fs-4">Inicio</a>
                        </div>
                        <div>
                            <a href="/ecommercecursos/comunidad" className="text-decoration-none text-dark mr-5 fw-bold fs-4">Comunidad</a>
                        </div>
                        <div>
                            <a href="/ecommercecursos/register" className="text-decoration-none text-dark mr-5 fw-bold fs-4">Registrarse</a>
                        </div>
                        <div className="carrito">
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
                            <div id="carrito" className="bg-white p-3 mt-2 shadow-lg">
                                {isEmpty ? (
                                    <p className="text-center">El carrito está vacío</p>
                                ) : (
                                <>
                                    <table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(curso => (
                                                <tr key={curso.id}>
                                                    <td>
                                                        <img className="img-fluid" src={`/img/${curso.image}.jpg`} alt="imagen curso" />
                                                    </td>
                                                    <td>{curso.name}</td>
                                                    <td className="fw-bold">${curso.price}</td>
                                                    <td className="d-flex align-items-center gap-2">
                                                        <button type="button" className="btn btn-dark" onClick={() => decreaseQuantity(curso.id)}>-</button>
                                                        {curso.quantity}
                                                        <button type="button" className="btn btn-dark" onClick={() => increaseQuantity(curso.id)}>+</button>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger" type="button" onClick={() => removeFromCart(curso.id)}>X</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <p className="text-end">Total a pagar: <span className="fw-bold">${cartTotal}</span></p>
                                </>
                                )}
                                <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>Vaciar Carrito</button>
                                <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>Hacer Pago</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
