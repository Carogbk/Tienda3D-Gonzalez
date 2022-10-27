import React, {useState, useEffect } from "react";
import Detail from './Detail'
import {useParams} from "react-router-dom"

export const ItemDetailContainer = ({greeting}) => {  

    const [catalogo, setCatalogo] = useState([])
    const [cargando, setCargando] = useState (true)
    const {id} = useParams ();
    
useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((json) => {
        console.log(json)
        setCatalogo(json)})
    .catch((error)=>{
      console.log(error);
    })
    .finally(setCargando(false))
    
  },[]);

  return (
    <>
      <h1>{greeting}</h1>
      {
      <>
        <Detail key={catalogo.id} productos={catalogo} />
      </>
      }
    </>
  );
}