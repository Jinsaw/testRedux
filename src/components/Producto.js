import React from 'react';
import '../css/index.css';

const Producto = ({ producto }) => {

    const { nombre, precio } = producto;
    console.log(producto);
    return ( 
        
        <div className= "contenedorProducto">
            <td>
                <td>{nombre}</td>
                <td><span>$ {precio}</span></td>
                <td className= "acciones">
                    <button
                        type= "button"
                    >Editar</button>
                    <button
                        type= "button"
                    >Eliminar</button>
                </td>
            </td>
        </div>
     );
}
 
export default Producto;