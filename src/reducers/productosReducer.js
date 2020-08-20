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
        default:
            return state;
    }
}