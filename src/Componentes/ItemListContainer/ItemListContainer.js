import React, {useState, useEffect } from "react";
import {ItemCount} from '../Contador/ItemCount'
import ItemList from './ItemList';
import {useParams} from "react-router-dom"

export const ItemListContainer = ({greeting}) => {  

  const [catalogo, setCatalogo] = useState([])
  const [cargando, setCargando] = useState (true)
  const algo = useParams();
  console.log(algo)
  const {id} = useParams ();
  const URL_GRAL='https://fakestoreapi.com/products'
  const URL_CAT=`${URL_GRAL}/category/${id}`
  let url = "";
  if(!id){
    url = URL_GRAL;
  }else{
    url = URL_CAT;
  }

  console.log(url)

useEffect(()=>{
  const getCatalogo = async () =>{
    try {
      const res = await fetch (url);
      const data= await res.json();
      setCatalogo(data);
    } catch {
      console.log("error");
    }finally{
      setCargando(false)
    }
  };
  getCatalogo();
  },[id]);
  
  return (
    <>
      <h1>{greeting}</h1>
      {
      <>
        {cargando ? <h1>Cargando...</h1> : <ItemList catalogo={catalogo} />};
      </>
      }
    </>
  );
}




//   fetch("https://fakestoreapi.com/products")
//   .then((res)=>res.json())
//   .then((json) => setCatalogo(json))
//   .catch((error)=>{
//     console.log(error);
//   })
//   .finally(setCargando(false))
  
// },[]),
