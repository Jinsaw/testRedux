import {
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DESCARGAR_PRODUCTO_EXITO,
    DESCARGAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    BUSQUEDA_EXITOSA,
    BUSQUEDA_ERROR
} from '../types/';
import Producto from '../components/Producto';

const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoeditar: null,
    productoeliminar: null,
    busqueda: '',
    resultados: '',
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DESCARGAR_PRODUCTO_EXITO:
            return {
                ...state,
                error: null,
                productos: action.payload,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }
        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                error: null,
                productoeditar: action.payload
            }
        case PRODUCTO_EDITADO_EXITO:
            return {
                ...state,
                error: null,
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
                error: null,
                productos: state.productos.filter( producto => 
                    producto.id ===! state.productoeliminar),
                productoeliminar: null
            }
        case BUSQUEDA_EXITOSA:
            return {
                ...state,
                error: false,
                busqueda: action.payload,
                resultados: state.productos.filter( producto =>
                    producto.nombre.includes(state.busqueda)
                    )
                }
        case BUSQUEDA_ERROR:
        case DESCARGAR_PRODUCTO_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
        case PRODUCTO_EDITADO_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
            return {
                ...state,
                error: true,
                payload: action.payload
            }
        default:
            return state;
    }
}