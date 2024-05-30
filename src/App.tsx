import Header from "./components/Header";
import { useCart } from './hooks/useCart';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comunidad from "./components/Comunidad";
import Register from "./components/Register";
import Home from "./components/Home";
import { useState } from 'react'

//importando los modules de firebase
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

export default function App() {

  const { cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart();
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
  })

  return (
    <Router>
      <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <Routes>
        <Route path="/ecommercecursos/comunidad" element={<Comunidad />} /> 
        <Route path="/ecommercecursos/register" element={<Register />} /> 
        <Route path="/ecommercecursos/home" element={<Home />} /> 
      </Routes>

      <footer className="mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">Universae - Academia de Cursos Online</p>
          </div>
      </footer>
    </Router>
  );
}



