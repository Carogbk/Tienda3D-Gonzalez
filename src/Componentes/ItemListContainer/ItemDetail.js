import React, { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ItemCount } from '../Contador/ItemCount';
import {Link, NavLink} from "react-router-dom"
import { CartContext } from '../Context/CartContext';
import { Carrito } from '../Carrito/Carrito';


const ItemDetail = ({ productos }) => {
  const  [agregarItemCount, setAgregarItemCount]= useState (false);
  const {agregarItem} = useContext(CartContext)
  
  const onAdd=(count)=>{
    setAgregarItemCount(true);
    agregarItem(productos, count)
  }
      return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={productos.image}
              alt={productos.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {productos.title}
              <Typography variant="body2" color="text.secondary">
              ${productos.description}
              </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              ${productos.price}
              </Typography>
            </CardContent>
          </CardActionArea>

          {!agregarItemCount ? (
          <ItemCount initial={1} stock={productos.stock} onAdd={onAdd}/>)
          : (
          <Link to={'/carrito'}>
            <button className='botonesGeneral'>Finalizar Compra</button>
          </Link>
        )}
        </Card>
        
      );
  };

  export default ItemDetail;
