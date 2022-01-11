import React, { useContext } from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto'
import Listado from '../proyectos/ListadoProyectos'
import proyectoContext from '../../context/proyectos/proyectoContext'

export default function Sidebar() {

    //Extraer los proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos } = proyectosContext;

    return (
        <aside>
            <h1>MERN<span>Task</span></h1>

            <NuevoProyecto />

            <div className='proyectos'>
                { proyectos.length === 0
                    ? <h2>No hay proyectos 😱</h2>
                    : <h2>Tus Proyectos</h2>
                }
                
                <Listado />
            </div>
        </aside>
    )
}
