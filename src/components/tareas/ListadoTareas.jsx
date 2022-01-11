import React, { useContext } from 'react'
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function ListadoTareas() {

    //Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Si no hya proyecto selecionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>;

    //Extraer proyecto
    const [ proyectoActual ] = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir colores', estado: true},
        {nombre: 'Elegir tema', estado: false},
        {nombre: 'plataforma de pago', estado: true},
        {nombre: 'Serviodres', estado: false}
    ]

    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            
            <ul className='listado-tareas'>
                { tareasProyecto.length === 0
                ? ( <li className='tarea'><p>No hay tareas... 🙄</p></li>)
                :  tareasProyecto.map(tarea => (
                    <Tarea tarea={tarea} />
                ))
            }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
            >Eliminar Proyecto &times;</button>
        </>
    )
}
