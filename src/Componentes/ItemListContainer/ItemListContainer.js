import React, {useState, useEffect } from "react";
import {ItemCount} from '../Contador/ItemCount'
import ItemList from './ItemList';

export const ItemListContainer = ({greeting}) => {  

  const [catalogo, setCatalogo] = useState([])
  const [esperar, setEsperar] = useState (true)

useEffect(()=>{
  
  fetch("https://fakestoreapi.com/products")
  .then((res)=>res.json())
  .then((json) => setCatalogo(json))
  .catch((error)=>{
    console.log(error);
  })
  .finally(setEsperar(false))
  
},[]);

// const onAdd = (count) => {  
//     console.log(`Agregaste este producto al carrito ${count} productos`);
//   }
  return (
    <>
      <h1>{greeting}</h1>
      {
      <>
        {esperar ? <h1>Esperar</h1> : <ItemList catalogo={catalogo} />}
      </>
      }
    </>
  );
}

// const productos=[
//   {nombre:"toppers", id:1, categoria:"cotillon", stock:10, precio:100},
//   {nombre:"nuñecos", id:2, categoria:"muñecos", stock:5, precio:300},
//   {nombre:"floreros", id:3, categoria:"hogar", stock:10, precio:200},
//   {nombre:"porta celular", id:4, categoria:"usopersonal", stock:10, precio:400},
//   ]

