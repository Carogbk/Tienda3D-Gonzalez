import React from "react";
import './Navbar.css';
import { CartWidget } from "../CartWidget/CartWidget";
import logo from '../../imagenes/logo.jpg'
import {Link} from "react-router-dom"


const Navbar = ({nombreUsuario,children})=> {

    const categorias = [
        {nombre:"Inicio", id:0, ruta:"/"},
        {nombre:"electronics", id:2, ruta:"/categoria/electronics"},
        {nombre:"jewelery", id:3, ruta:"/categoria/jewelery"},
        {nombre:"men's clothing", id:4, ruta:"/categoria/men's clothing"},
        {nombre:"women's clothing", id:5, ruta:"/categoria/women's clothing"},
    ];
    return(
        <header>
            <Link to="/">
            <img className='logo' src={logo} alt="" />
            </Link>
            <h2 styles= {styles.tituloNav}>"Gprinter donde tus ideas se convierten en 3D"</h2>
        
            <nav>
                    
            {
                categorias.map((categorias)=>{
                    
                    return <Link key={categorias.id} to={categorias.ruta}>{categorias.nombre}</Link>
                })
            }
            </nav>
            <Link to="/carrito">
            <CartWidget />
            </Link>
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

