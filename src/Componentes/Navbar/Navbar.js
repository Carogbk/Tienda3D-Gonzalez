import React from "react";
import './Navbar.css';
import { CartWidget } from "../CartWidget/CartWidget";
import logo from '../../imagenes/logo.jpg'


const Navbar = ({nombreUsuario,children})=> {

    const barraMenu = [
        {nombre:"Inicio", id:0, ruta:"#"},
        {nombre:"Productos", id:1, ruta:"#"},
        {nombre:"Contacto", id:2, ruta:"#"},
        {nombre:"Cuenta", id:3, ruta:"#"},
    ];

    return(
        <header>
            <img className='logo' src={logo} alt="" />
            
            <h2 styles= {styles.tituloNav}>"Gprinter donde tus ideas se convierten en 3D"</h2>
        
            <nav>
            {
                barraMenu.map((barra)=>{
                    return <a key={barra.id} href={barra.ruta}>{barra.nombre}</a>
                })
            }
            </nav>
            <CartWidget />
        </header>
    );

}

export default Navbar;

const styles ={
    tituloNav: {
        fontSize: 10,
        color:'white',
    },
}

