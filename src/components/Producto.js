import React from 'react';
import '../css/index.css';
import Swal from 'sweetalert2';

//!Redux
import { useDispatch } from 'react-redux';
import { obtenerProductoActionEditar,
         obtenerProductoActionEliminar } 
    from '../actions/productoActions';
import { useHistory } from 'react-router-dom';

const Producto = ({producto}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const btnEliminarProducto = (producto) => {

        Swal.fire({
            title: 'Estas seguro?',
            text: "Un producto eliminado no puede recuperarse",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.value) {                
                    dispatch( obtenerProductoActionEliminar(id) );
                }
            })        
    }

    const btnEditarProducto = (producto) => {
        dispatch( obtenerProductoActionEditar(producto) );
        history.push(`/productos/editar/${producto.id}`);
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