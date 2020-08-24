import React from 'react';
import Buscador from './Buscador';
import '../css/index.css';
import { Link } from 'react-router-dom';

//!Redux

const Header = () => {

    return ( 
        <header className= "header">
            <Link to = {"/"}>
                <h1>E-Shop</h1>
            </Link>
            <Buscador 
                busqueda = "busqueda"
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