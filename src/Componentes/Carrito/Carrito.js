import React, { useContext, useState } from "react";
import {Link, useInRouterContext} from "react-router-dom"
import { CartContext} from "../Context/CartContext";
import { db } from "../../firebase/firebase";
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore"
import Swal from 'sweetalert2'
import './Carrito.css';


export const Carrito = () => {
    const { cart, total, quantity, limpiarCarrito, eliminarItem } = useContext(CartContext);
    const [usuario, setUsuario] = useState({});
    const updateUsuario= (event) => {
        setUsuario( usuario => ({...usuario, [event.target.name]: event.target.value }))
    }
console.log(cart)
    const finalizarCompra =()=>{
        console.log(usuario)
        if(Object.keys(usuario).length === 0 ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Antes de finalizar, registra tu cuenta',
                
              })
              return
        }
        const ventasColl = collection(db, "ventas")
        addDoc(ventasColl,{
            comprador: usuario,
            items: cart,
            total,
            date: serverTimestamp()
        })
        .then(result =>{
            Swal.fire({  
                title: 'Ya casi tenes tu compra en tus manos',  
                type: 'success',  
                text: `El codigo de tu compra es ${result.id}`,  
            });  
        })
        .catch(e=>{
            console.log(e);
        })
        limpiarCarrito();   
    }

    const vaciarCarrito = () =>{
        limpiarCarrito();   
    }

    const updateStock = (e)=>{
        e.preventDefault();
        cart.forEach(productSt => {
            const updateStock = doc(db, "productos", productSt.id)
            updateDoc(updateStock,{stock:productSt.stock - quantity})
        });
        
    }
    return (
        <>
        {
        cart.length === 0 ? 
        (
            <h3> No agregaste productos aun, no te preocupes podes hacer clic <Link to="/">Aca</Link></h3>
        ):(
        <> 
            <div className="carritoStyle">
            <div>
            <h1 className="tituloCarrito">Gracias por tu compra, solo quedan unos pasos...</h1>
            </div>
                    {cart.map((producto) => (

                    
                        
                    <div key={producto.id} className="textoCarrito">
                        <div className="shoppingCart">
                        <p className="addCart">Se agrego a tu carrito</p>
                        <div className="cartDatos">
                        <h1 >{producto.title}</h1>   
                        <h3>Precio: ${producto.price}</h3>
                        <h3>Categoria: {producto.category}</h3>
                        <h4>Cantidad: {producto.cantidad}</h4>
                        </div>
                        <button className="botonEliminarCart" onClick={()=>eliminarItem(producto.id)}>Eliminar</button>
                        </div>
                        
                        </div>
                        

                    )) }
                
                <div>
                <div>
                <h3 className="subtitulosCarrito"> Cantidad de productos agregados al carrito: {quantity}</h3>
                </div>
                <h2 className="subtitulosCarrito">Total del carrito: $ {total}</h2> 
                <button className="botonesForm" onClick={vaciarCarrito}> Limpiar Carrito</button>
                    
                </div>
                <div>
                    
              <form action="" className='formulario' onSubmit={updateStock}>
              <h3>Registra tu cuenta</h3>
                <input onChange={updateUsuario} placeholder="Nombre" name='nombre' type='text' required/>
                <input onChange={updateUsuario} placeholder="Apellido" name='apellido' type='text' required/>
                <input onChange={updateUsuario} placeholder="Email" name='email' type='email' required/>
                <input onChange={updateUsuario} placeholder="Repetir Email" name='email' type='email' required/>
                <h5>Excelente, ahora finaliza tu compra!</h5>
                <button className="botonesForm" onClick={finalizarCompra}> Finzalizar Compra</button>
                
              </form>
            </div>
            </div>
                </>
            )}
        
        </>
    );
}