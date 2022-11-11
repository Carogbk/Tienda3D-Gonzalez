import React, {useContext} from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from '../Context/CartContext';


export const CartWidget = () => {
  const {quantity}= useContext(CartContext)
  return (
    <>
    <div>
    {quantity === 0 ? '': <p className="qty">{quantity}</p> }
    <button><ShoppingCartIcon color="succesary" fontSize="large" /></button> 
    </div>
    </>
  );
}