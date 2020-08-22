import {
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DESCARGAR_PRODUCTO_EXITO,
    DESCARGAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
} from '../types/';
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';



export function descargaProductosAction(){
    return async(dispatch) => {
        try {
            const respuesta = await clienteAxios.get('/productos');
            //Si se descargan los productos
            dispatch( descargaProductosExito(respuesta.data) );
        } catch (error) {
            console.log(error);
            dispatch( descargaProductosError() );
        }
    }
}

const descargaProductosExito = (productos) => ({
    type: DESCARGAR_PRODUCTO_EXITO,
    payload: productos
})

const descargaProductosError = () => ({
    type: DESCARGAR_PRODUCTO_ERROR,
})


export function crearNuevoProductoAction(producto) {
    return async(dispatch) => {
        try {
            await clienteAxios.post('/productos', producto);
            //Si se agrega el producto
            dispatch( addProductoExito(producto) );
            Swal.fire(
                'Correcto', 
                'El producto se agregó correctamente',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch( addProductoError() );
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const addProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const addProductoError = () => ({
    type: AGREGAR_PRODUCTO_ERROR,
})

export const obtenerProductoActionEditar = (producto) => {
    return (dispatch) => {
        dispatch( obtenerProductoEditar(producto) );
    }
}

const obtenerProductoEditar = (producto) => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

export const editarProductoAction = (producto) => {
    return async( dispatch ) => {
        dispatch( comenzarEdicionProducto() )
        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            //Si se edita el producto
            dispatch( productoEditadoExito(producto) )
        } catch (error) {
            console.log(error);  
            dispatch( productoEditadoError() );
        }
    }
}

const comenzarEdicionProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
})

const productoEditadoExito = (producto) => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const productoEditadoError = () => ({
    type: PRODUCTO_EDITADO_ERROR
})

export const obtenerProductoActionEliminar = (id) => {
    return async(dispatch) => {
        dispatch( obtenerProductoEliminar(id) )
        try {
            await clienteAxios.delete(`/productos/${id}`);
            //Si se elimina el producto
            dispatch( eliminarProductoExito() );

            Swal.fire(
                'Eliminado',
                'El producto se eliminó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch( eliminarProductoError() );
        }
    }
}

const obtenerProductoEliminar = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO,
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR
})