import React, { useContext } from 'react'
import tareaContext from '../../context/tareas/tareaContext'
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function Tarea({ tarea }) {

    //Obtener proyecto
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener las funciones y state del context
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext

    //Extraer proyecto
    const [ proyectoActual ] = proyecto;

    //eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    //modificar estado tarea
    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    //agrega la tarea actual para la edicion
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }

    return (
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div className='estado'>
                {tarea.estado
                ? <button
                    type='button'
                    className='completo'
                    onClick={() => cambiarEstado(tarea) }
                >Completo</button>
                : <button
                    type='button'
                    className='incompleto'
                    onClick={() => cambiarEstado(tarea) }
                >Incompleto</button>}
            </div>

            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={ () => seleccionarTarea(tarea) }
                >Editar</button>

                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={ () => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    )
}
