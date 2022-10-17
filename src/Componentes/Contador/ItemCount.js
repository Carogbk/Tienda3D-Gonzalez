import React, {useState, useEffect} from 'react';
import './ItemCount.css';

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count,setCount] = useState(initial);
    
    const manejoClickSum = () =>{
        if(count < stock){
            setCount(count + 1);
        }
    };

    const manejoClickRes = () =>{
        if(count > 1){
            setCount(count - 1)
        }
    };

    const manejoClickLim = () =>{
        setCount(0);
    };

    
    return (
        <div className='cajaContador'>
        <h1>Contador</h1>
        <div className='botonesContador'>
        <div>
        <button onClick={manejoClickRes}>-</button>
        {<h3 className='contadorNumeros'>{count}</h3>}
        <button  onClick={manejoClickSum}>+</button>
</div>
    </div>
    <div>
    <button disabled={stock === 0} onClick={()=>onAdd(count)}>
        <span>
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </span>
    </button>
    <button disabled={stock === 0} onClick={manejoClickLim}>Limpiar Carrito</button>
    </div>
    </div>
    
    
    )
}
