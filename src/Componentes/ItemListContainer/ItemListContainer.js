import React, {useState, useEffect } from "react";
import {ItemCount} from '../Contador/ItemCount'
import ItemList from './ItemList';
import {useParams} from "react-router-dom"
import { db } from "../../firebase/firebase";
import {getDocs, collection, query, where} from "firebase/firestore"

export const ItemListContainer = ({greeting}) => {  

  const [catalogo, setCatalogo] = useState([])
  const [cargando, setCargando] = useState (true)
  const {id} = useParams();
  const productosCollection= collection(db, 'productos');
  const qy= query (productosCollection, where('category', '==', `${id}`))
 
  let url = "";
  if(!id){
    url = productosCollection;
  }else{
    url = qy;
  }


  useEffect(()=>{
  getDocs(url).then((result)=>{
    
    const listProductos = result.docs.map(item =>{
      
    return{
      ...item.data(),
      id: item.id,
    } 
  });
  
  setCatalogo(listProductos);
})
.catch ((errror)=> { 
    })
.finally(setCargando(false));
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




 

  
  // const URL_GRAL='https://fakestoreapi.com/products'
  // const URL_CAT=`${URL_GRAL}/category/${id}`




  // const getCatalogo = async () =>{
  //   try {
  //     const res = await fetch (url);
  //     const data= await res.json();
  //     setCatalogo(data);
  //   } 