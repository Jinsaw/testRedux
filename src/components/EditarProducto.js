import React, { useState, useEffect } from 'react';

//!Redux
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import { useHistory } from 'react-router-dom';

const EditarProducto = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [ producto, guardarProducto ] = useState({
        nombre: '',
        precio: ''
    });

    const productoeditar =  useSelector(state => state.productos.productoeditar);

    useEffect(() => {
        guardarProducto(productoeditar);
    }, [productoeditar])

    
    const onChangeFormulario = (e) => {
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    const { nombre, precio } = producto;
    
    const submitEditarProducto = (e) => {
        e.preventDefault();
        dispatch( editarProductoAction(producto) );
        history.push('/');
    }
    
    return ( 
        <div className= "contenedorPrincipal">
            <h1>Editar Producto</h1>
            <form
                className= "formulario"
                onSubmit= { submitEditarProducto }
            >
                <div className= "contenedorSecundario">
                    <label>Nombre del producto</label>
                   
                    <input
                        type= "text"
                        name= "nombre"
                        value= {nombre}
                        onChange= {onChangeFormulario}
                        placeholder= "Ingresa el nuevo nombre del producto"
                    />
                </div>
                <div className= "contenedorSecundario">
                    <label>Precio Producto</label>
                   
                    <input
                        type= "number"
                        name= "precio"
                        value= {precio}
                        onChange= {onChangeFormulario}
                        placeholder= "Ingrese el nuevo precio"
                    />
                </div>
                <button
                    type= "submit"
                    className= "agregarProducto"
                >Guardar Cambios</button>
            </form>
        </div>
     );
}
 
export default EditarProducto;