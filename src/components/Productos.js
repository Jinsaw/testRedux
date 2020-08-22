import React, { useEffect } from 'react';
import Producto from './Producto';
import '../css/index.css';

//!Redux
import { useDispatch, useSelector } from 'react-redux';
import { descargaProductosAction } from '../actions/productoActions';

const Productos = () => {

    const dispatch = useDispatch();
    
    useEffect(()=>{
        const descargaProductos = () => dispatch( descargaProductosAction() );
        descargaProductos();
        // eslint-disable-next-line
    },[])

    //!Obtenemos los datos del state (productos)
    //!Como es un array se debe recorrer para poder mostrar
    const productos = useSelector( state => state.productos.productos); 

    return ( 
        <div className= "contenedorProductos">
            <div className= "contenedorTitulo">
                <h1>Listado de productos</h1>
            </div>
            <table className= "tabla">
                <thead className= "tablaHead">
                    <tr>
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody className= "tablaBody">
                    { productos.length === 0 ? 'No hay productos para mostrar' : (
                        productos.map( producto => (
                            <Producto
                                key= {producto.id}
                                producto= {producto}
                            />
                        ))
                    ) }
                </tbody>
            </table>
        </div>
    );
}

export default Productos;