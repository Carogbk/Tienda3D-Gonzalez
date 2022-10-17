import React from "react";
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import {CartWidget} from "./Componentes/CartWidget/CartWidget";
import {ItemListContainer} from "./Componentes/ItemListContainer/ItemListContainer";
import {ItemCount} from './Componentes/Contador/ItemCount'

const App = () => {
  const nombre="Damian"
  const saludo = "Bienvenidos"
  const onAdd =()=> {
    console.log=("Se agrego al carrito")
  }
    return (
      <>
      <Navbar/>
      <ItemListContainer greeting={saludo}/>
      </>
    );
};
export default App;