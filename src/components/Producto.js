import React from 'react';
import '../css/index.css';

//!Redux
import { useDispatch } from 'react-redux';
import { obtenerProductoActionEditar,
         obtenerProductoActionEliminar } 
    from '../actions/productoActions';
import { useHistory } from 'react-router-dom';

const Producto = ({ producto }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const btnEditarProducto = (producto) => {
        dispatch( obtenerProductoActionEditar(producto) );
        history.push(`/productos/editar/${producto.id}`);
    }

    const btnEliminarProducto = (producto) => {
        dispatch( obtenerProductoActionEliminar(id) );
        window.location = '/';
    }
    const { nombre, precio, id } = producto;

    return ( 
        <tr>
            <td>{nombre}</td>
            <td className= "precio"><span>$ {precio}</span></td>
            <td className= "acciones">
                <button
                    className= "btn-editar"
                    type= "button"
                    onClick= {() => btnEditarProducto(producto)}
                >Editar</button>
                <button
                    className= "btn-eliminar"
                    type= "button"
                    onClick= {() => btnEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>

     );
}
 
export default Producto;