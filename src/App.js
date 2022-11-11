import React, { useContext } from "react";
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import {CartWidget} from "./Componentes/CartWidget/CartWidget";
import {ItemListContainer} from "./Componentes/ItemListContainer/ItemListContainer";
import {ItemCount} from './Componentes/Contador/ItemCount'
import {BrowserRouter, Routes,Route } from "react-router-dom";
import { ItemDetailContainer } from "./Componentes/ItemListContainer/ItemDetailContainer";
import { ContextProvider } from "./Componentes/Context/CartContext";
import { Carrito } from "./Componentes/Carrito/Carrito";
import { CartContext } from './Componentes/Context/CartContext';
const App = () => {
 
  const nombre="Damian"
  const saludo = "Bienvenidos"
  const onAdd =()=> {
    console.log=("Se agrego al carrito")
  }
    return (
      <BrowserRouter>
      <ContextProvider>
      <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={saludo} />} />
          <Route path="/categoria/:id" element={<ItemListContainer greeting={saludo} />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />}/>
      </Routes>
      </ContextProvider>
      </BrowserRouter>
    );
};
export default App;