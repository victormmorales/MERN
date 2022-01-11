import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext';

export default function Proyecto({ proyecto }) {

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    //Obtener las funciones y state del context
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext

    //Funcion para agregar el proyecto seleccionado
    const seleccionarProyecto = id => {
        proyectoActual(id); //Fijar el proyecto seleccionado
        obtenerTareas(id); //Filtrar tareas del proyecto
    };

    return (
            <li>
                <button
                    type="button"
                    className="btn btn-blank"
                    onClick={ () => seleccionarProyecto(proyecto.id) }
                >{proyecto.nombre}</button>
            </li>
    )
}
