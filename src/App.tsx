import Header from "./components/Header";
import { useCart } from './hooks/useCart';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comunidad from "./components/Comunidad";
import Register from "./components/Register";
import Curso from "./components/Curso";

//importando los modules de firebase
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

export default function App() {
  const { data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart();

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
        <Route path="/ecommercecursos" element={<Main data={data} addToCart={addToCart} />} />
      </Routes>

      <footer className="mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">Universae - Academia de Cursos Online</p>
          </div>
      </footer>
    </Router>
  );
}

function Main({ data, addToCart }) {
  return (
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
  );
}

