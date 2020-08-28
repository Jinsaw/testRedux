import React, { useState, Fragment } from 'react';

//!Redux
import { useDispatch } from 'react-redux';
import { buscarLetraAction } from '../actions/productoActions';

const Buscador = () => {
    
    const [ busqueda, guardarBusqueda ] = useState('');
    const dispatch = useDispatch();

    const resultadoBusqueda = (busqueda) => dispatch( buscarLetraAction(busqueda));
    resultadoBusqueda(busqueda);
    
    return ( 
        <Fragment>
            <input 
                type= "text"
                name= "busqueda"
                value= { busqueda }
                onChange= { e => guardarBusqueda(e.target.value)} 
                placeholder= "Ingresa tu busqueda"
                className= "buscador" 
            />
        </Fragment>           
    );
}

export default Buscador;