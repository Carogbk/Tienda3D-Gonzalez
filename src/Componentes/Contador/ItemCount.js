import React, {useState, useEffect} from 'react';
import './ItemCount.css';
import {Link} from "react-router-dom"

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count,setCount] = useState(initial);
    
    const manejoClickSum = () =>{
        if(count < stock){
            setCount(count + 1);
        }
    };

    const manejoClickRes = () =>{
        if(count> 1){
            setCount(count - 1)
        }
    };

    const manejoClickLim = () =>{
        setCount(0);
    };

    const manejoClickAddCarrito = ()=>{
        if(stock!==0){
            onAdd(count);
        }
    }

    
    return (
        < div className='cajaContador'>
        <div className='botonesGeneral'>
        <button onClick={manejoClickRes}>-</button>
        {<h3 className='contadorNumeros'>{count}</h3>}
        <button  onClick={manejoClickSum}>+</button>
        </div>
    <div>
    <button className='botonesGeneral' disabled={stock===0} onClick={manejoClickAddCarrito}>{stock === 0 ? <span>Sin stock</span>  : <span>Agregar al Carrito</span>}
    </button>
    </div>  
    </div>
    
    
    )
}
