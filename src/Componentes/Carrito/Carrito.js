import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { CartContext} from "../Context/CartContext";
import { db } from "../../firebase/firebase";
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore"
import Swal from 'sweetalert2'
import './Carrito.css';

export const Carrito = () => {
    const { cart, total, quantity, limpiarCarrito, eliminarItem } = useContext(CartContext);
    console.log(cart)
    const comprador ={
        mombre: 'Damian',
        apellido: 'Aguado',
        email: 'daguado@gmail.com',
    }//hacer formulario en vez de los datos

    const finalizarCompra =()=>{
        const ventasColl = collection(db, "ventas")
        addDoc(ventasColl,{
            comprador,
            items: cart,
            total,
            date: serverTimestamp()
        })
        .then(result =>{
            console.log('resulta: ',result)
            Swal.fire({  
                title: 'Ya casi tenes tu compra en tus manos',  
                type: 'success',  
                text: `El codigo de tu compra es ${result.id}`,  
              });  
        })
        .catch(e=>{
            console.log(e);
        })
    }
    const actualizarStock = ()=>{
        cart.array.forEach(productSt => {
            const updateStock = doc(db, "productos", productSt.id)
            updateDoc(updateStock,{stock:productSt.stock - quantity})
        });
        const updateStock = doc(db, "productos", "213FSSYzce4L5yRTS0YX")
        
    }
    return (
        <>
        {
        cart.length === 0 ? 
        (
            <h2>No agregaste productos aun, no te preocupes podes hacer clic ) <Link to="/">AQUI</Link></h2>
        ):(
        <>
                    {cart.map((producto) => {
                        return (<>
                    <div>
                        <h1 className="tituloCarrito">Gracias, por tu compra. Solo queda algunos pasos...</h1>
                    </div>
                    <div className="textoCarrito">
                        <div key={producto.id}>
                        <p>Agregaste al carrito...</p>
                        <h1 >{producto.title}</h1>   
                        <h2>Precio: {producto.price}</h2>
                        <h3>Categoria: {producto.category}</h3>
                        <h4>Cantidad: {producto.cantidad}</h4>
                        <button  onClick={()=>eliminarItem(producto.id)}>Eliminar</button>

                        </div>
                        </div>
                        </>)

                    }) }
                    
                <div>
                <h2 className="subtitulosCarrito">Productos: {quantity}</h2>
                <h3>Total del carrito: $ {total}</h3> 
                    <button onClick={finalizarCompra}> Finzalizar Compra</button>
                </div>
                </>
            )}
        
        </>
    );
}