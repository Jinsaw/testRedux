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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    //!Obtenemos los datos del state (productos)
    //!Como es un array se debe recorrer para poder mostrar
    const productos = useSelector( state => state.productos.productos); 
    const resultados = useSelector( state => state.productos.resultados);

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
                    {(productos.length === 0) ?
                        (<p>No hay productos para mostrar</p>) : 
                    (resultados.length === 0) ? 
                        (
                            productos.map( producto => (
                                <Producto 
                                    key= {producto.id}
                                    producto= {producto}
                                />
                            ))
                        ) :
                    (resultados.length === 0) ?
                        (<p>No se encontraron coincidencias</p>) : 
                    (resultados.length !== 0) ?
                        (
                            resultados.map( producto => (
                                <Producto 
                                    key= {producto.id}
                                    producto= {producto}
                                />
                            ))
                        ) :
                    (null)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Productos;