import React from 'react';
import '../css/index.css';

const Producto = () => {

    return ( 
        
        <div className= "contenedorProducto">
            <tr>
                <td>Nombre</td>
                <td><span>Precio</span></td>
                <td className= "acciones">
                    <button
                        type= "button"
                    >Editar</button>
                    <button
                        type= "button"
                    >Eliminar</button>
                </td>
            </tr>
        </div>
     );
}
 
export default Producto;