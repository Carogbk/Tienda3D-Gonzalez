import React from "react";
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import {CartWidget} from "./Componentes/CartWidget/CartWidget";
import {ItemListContainer} from "./Componentes/ItemListContainer/ItemListContainer";

const App = () => {
  const nombre="Damian"
  const saludo = "Bienvenidos"

    return (
      <>
      <Navbar/>
      <ItemListContainer greeting={saludo}/>
      </>
    );
};
export default App;