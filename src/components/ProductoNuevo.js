import React, { useState } from 'react';
import { crearNuevoProductoAction } from '../actions/productoActions';

//!Redux
import { useDispatch } from 'react-redux';
const ProductoNuevo = () => {

    const [ nombre, guardarNombre ] = useState('');
    const [ precio, guardarPrecio ] = useState(0);

    //! Nos permite mandar a llamar las funciones(acciones) que tengamos en el Action.
    const dispatch = useDispatch();
    
    //!Funcion que ejecuta el dispatch para mandar a llamar la funcion del Action.
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) );

    const submitNuevoProducto = (e) => {
        e.preventDefault();
        agregarProducto({
            nombre,
            precio
        });
    }
    
    return ( 
        <div className= "contenedorPrincipal">
            <h1>Agregar productos</h1>
            <form
                className= "formulario"
                onSubmit= { submitNuevoProducto }
            >
                <div className= "contenedorSecundario">
                    <label>Nombre del producto</label>
                   
                    <input
                        type= "text"
                        name= "nombre"
                        value= {nombre}
                        onChange= {e => guardarNombre(e.target.value)}
                        placeholder= "Ingresa el nombre del producto"
                    />
                </div>
                <div className= "contenedorSecundario">
                    <label>Precio</label>
                   
                    <input
                        type= "number"
                        name= "precio"
                        value= {precio}
                        onChange= {e => guardarPrecio( Number(e.target.value) )}
                        min= "0"
                        placeholder= "Ingrese el precio del artículo"
                    />
                </div>
                <button
                    className= "agregarProducto"
                    type= "submit"
                >Agregar</button>
            </form>
        </div>
     );
}
 
export default ProductoNuevo;