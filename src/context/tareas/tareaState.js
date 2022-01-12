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
    LIMPIAR_TAREA,
    ESTADO_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            {id: 1, nombre: 'Elegir colores', estado: true, proyectoId: 1},
            {id: 2, nombre: 'Elegir tema', estado: false , proyectoId: 2},
            {id: 3, nombre: 'plataforma de pago', estado: true, proyectoId: 3},
            {id: 4, nombre: 'Serviodres', estado: false, proyectoId: 4},
            {id: 5, nombre: 'Elegir colores', estado: true, proyectoId: 1},
            {id: 6, nombre: 'Elegir tema', estado: false , proyectoId: 2},
            {id: 7, nombre: 'plataforma de pago', estado: true, proyectoId: 3},
            {id: 8, nombre: 'Elegir colores', estado: true, proyectoId: 4},
            {id: 9, nombre: 'Elegir tema', estado: false , proyectoId: 1},
            {id: 10, nombre: 'plataforma de pago', estado: true, proyectoId: 2},
            {id: 11, nombre: 'Elegir colores', estado: true, proyectoId: 3},
            {id: 12, nombre: 'Elegir tema', estado: false , proyectoId: 4},
            {id: 13, nombre: 'plataforma de pago', estado: true, proyectoId: 3}
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
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

    //Eliminar tarea x id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    //cambia estado tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //extrae la tarea para la edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    return (
        <TareaContext.Provider
        value={{
            tareas: state.tareas,
            tareasproyecto: state.tareasproyecto,
            errortarea: state.errortarea,
            tareaseleccionada: state.tareaseleccionada,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea,
            cambiarEstadoTarea,
            guardarTareaActual
        }}>
            {props.children}
        </TareaContext.Provider>
    )
}
 
export default TareaState;
