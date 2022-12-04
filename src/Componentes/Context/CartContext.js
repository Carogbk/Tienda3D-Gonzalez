import React, {
  createContext,
  useState,
  useEffect
} from "react";
import Item from "../ItemListContainer/Item";


export const CartContext = createContext();

export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const agregarItem = (Item, cantidad) => {

      if (isInCart(Item.id)) {
        const found = cart.find(producto => producto.id === Item.id)
        const index = cart.indexOf(found)
        const copia = [...cart]
        copia[index].cantidad += cantidad
        setCart(copia)

      } else {

        setCart([...cart, {...Item, cantidad}]);
      }
      setQuantity(cantidad);
      setTotal(total + (Item.price * cantidad))
      // setQuantity(cantidad - borrar.cantidad)
    }

    const eliminarItem = (id) => {
      const found = cart.find(producto => producto.id === id)
      setCart(cart.filter(Item => Item.id !== id))
      setQuantity(quantity - found.cantidad)
      setTotal(total - (found.price * found.cantidad))
    }

    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }

    const limpiarCarrito = () => {
      setCart([]);
      setQuantity(0)
      setTotal(0)
    }

    useEffect(()=>{
      let cantidad = 0;
      let totalC = 0;
      
      cart.forEach(item =>{
        cantidad += item.cantidad;
        totalC += (item.price * item.cantidad)
      });
      setQuantity(cantidad);
      setTotal(totalC)
    },[cart])

    

return(<CartContext.Provider value={{cart, quantity, agregarItem, eliminarItem, limpiarCarrito, total}}>{children}</CartContext.Provider>)
}
