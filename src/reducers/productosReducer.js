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
    OCULTAR_ALERTA,
    OBTENER_PRODUCTO_ELIMINAR
} from '../types/';
import Producto from '../components/Producto';

const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoeditar: null,
    productoeliminar: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DESCARGAR_PRODUCTO_EXITO:
            return {
                ...state,
                productos: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }
        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                productoeditar: action.payload
            }
        case PRODUCTO_EDITADO_EXITO:
            return {
                ...state,
                productoeditar: null,
                productos: state.productos.map( producto =>
                    producto.id === action.payload.id ? producto = action.payload : producto )
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoeliminar: action.payload
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                productos: state.productos.filter( producto => 
                    producto.id ==! state.productoeliminar),
                productoeliminar: null
            }
        default:
            return state;
    }
}