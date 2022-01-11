import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload )
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas: [...state.tareas, action.payload]
            }

        default:
            return state;
    }
}