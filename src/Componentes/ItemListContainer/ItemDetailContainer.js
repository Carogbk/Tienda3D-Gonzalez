import React, {useState, useEffect } from "react";
import Detail from './ItemDetail'
import {useParams} from "react-router-dom"
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { db } from "../../firebase/firebase";
import {getDoc, collection, doc} from "firebase/firestore";

export const ItemDetailContainer = ({greeting}) => {  
    const [catalogo, setCatalogo] = useState([])
    const [cargando, setCargando] = useState (true)

    const {id} = useParams ();
 
useEffect(()=>{
    const productosCollection = collection(db, "productos")
    const refDoc = doc(productosCollection, `${id}`);
    getDoc(refDoc)
    .then((resultado)=>{
      setCatalogo({id: resultado.id, ...resultado.data(),})
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setCargando(false));
  }, [id]);

  return (
      <>
        <h1>{greeting}</h1>
        {<Detail key={catalogo.id} productos={catalogo} />}
      </>
      );
  }