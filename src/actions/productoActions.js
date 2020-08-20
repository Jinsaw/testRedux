import {
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DESCARGAR_PRODUCTO_EXITO,
    DESCARGAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types/';

import clienteAxios from '../config/axios';


export function descargaProductosAction(){
    return async(dispatch) => {
        try {
            const respuesta = await clienteAxios.get('/productos');
            //Si se descargan los productos
            dispatch( descargaProductosExito(respuesta.data) );
        } catch (error) {
            console.log(error);
        }
    }
}

const descargaProductosExito = (productos) => ({
    type: DESCARGAR_PRODUCTO_EXITO,
    payload: productos
})


export function crearNuevoProductoAction(producto) {
    return async(dispatch) => {
        try {
            await clienteAxios.post('/productos', producto);
            //Si se agrega el producto
            dispatch( addProductoExito(producto) );
        } catch (error) {
            console.log(error);
        }
    }
}

const addProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
