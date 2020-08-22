import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crearNuevoProductoAction } from '../actions/productoActions';
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions';

//!Redux
import { useDispatch, useSelector } from 'react-redux';
const ProductoNuevo = () => {

    const history = useHistory();
    
    const [ nombre, guardarNombre ] = useState('');
    const [ precio, guardarPrecio ] = useState(0);

    //! Nos permite mandar a llamar las funciones(acciones) que tengamos en el Action.
    const dispatch = useDispatch();
    
    //!Funcion que ejecuta el dispatch para mandar a llamar la funcion del Action.
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) );

    //!Acceder al state del store
    const alerta = useSelector(state => state.alertas.alerta);

    const submitNuevoProducto = (e) => {
        e.preventDefault();
        const inputNombre = document.getElementById("nombre");

        if( nombre.trim() === '' || precio === '') {
            const alerta = {
                msg: 'Ambos Campos son obligatorios',
                classes: 'msg-alerta'
            }
            dispatch( mostrarAlertaAction(alerta) );
            inputNombre.focus();
            return;
        }

        dispatch( ocultarAlertaAction(alerta) );

        agregarProducto({
            nombre,
            precio
        });

        guardarNombre('');
        guardarPrecio('');
        inputNombre.focus();
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
                        autoFocus
                        id= "nombre"
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
                        placeholder= "Ingrese el precio del artículo"
                    />
                </div>
                {alerta ? <p className= {alerta.classes}>{ alerta.msg }</p> : null}
                <button
                    className= "agregarProducto"
                    type= "submit"
                >Agregar</button>
            </form>
        </div>
     );
}
 
export default ProductoNuevo;