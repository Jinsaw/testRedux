import React from 'react';
import '../css/index.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
       <header className= "header">
            <Link to = {"/"}>
                <h1>E-Shop</h1>
            </Link>
            <input 
                className= "buscador"               
                type= "text"
                placeholder= "Ingresa tu busqueda"
            />
            <Link to = {"/productos/nuevo"}>
                <button
                    className= "agregarProductos"
                >Agregar Productos &#43;</button>
            </Link>
       </header>
     );
}
 
export default Header;