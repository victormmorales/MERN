import React, { useReducer } from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer';
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            {nombre: 'Elegir colores', estado: true, proyectoId: 1},
            {nombre: 'Elegir tema', estado: false , proyectoId: 2},
            {nombre: 'plataforma de pago', estado: true, proyectoId: 3},
            {nombre: 'Serviodres', estado: false, proyectoId: 4},
            {nombre: 'Elegir colores', estado: true, proyectoId: 1},
            {nombre: 'Elegir tema', estado: false , proyectoId: 2},
            {nombre: 'plataforma de pago', estado: true, proyectoId: 3},
            {nombre: 'Elegir colores', estado: true, proyectoId: 4},
            {nombre: 'Elegir tema', estado: false , proyectoId: 1},
            {nombre: 'plataforma de pago', estado: true, proyectoId: 2},
            {nombre: 'Elegir colores', estado: true, proyectoId: 3},
            {nombre: 'Elegir tema', estado: false , proyectoId: 4},
            {nombre: 'plataforma de pago', estado: true, proyectoId: 3}
        ],
        tareasproyecto: null,
        errortarea: false
    }

    //crear dispatch y state
    const [ state, dispatch ] = useReducer(TareaReducer, initialState);

    //funciones del crud de tareas

    //Obtener las tareas
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //Agregar tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //valida y muestra un error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
        value={{
            tareas: state.tareas,
            tareasproyecto: state.tareasproyecto,
            errortarea: state.errortarea,
            obtenerTareas,
            agregarTarea,
            validarTarea
        }}>
            {props.children}
        </TareaContext.Provider>
    )
}
 
export default TareaState;
