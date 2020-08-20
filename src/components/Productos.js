import React from 'react';
import Producto from './Producto';
import '../css/index.css';
import styled from 'styled-components';

const Productos = () => {

    return ( 
        <div className= "contenedorProductos">
            <div className= "contenedorTitulo">
                <h1>Listado de productos</h1>
            </div>
            <table className= "tabla">
                <thead className= "tablaHead">
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className= "tablaBody">
                    Productos aca!
                </tbody>
            </table>
        </div>
     );
}
 
export default Productos;