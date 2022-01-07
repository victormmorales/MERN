import React from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto'
import Listado from '../proyectos/ListadoProyectos'

export default function Sidebar() {
    return (
        <aside>
            <h1>MERN<span>Task</span></h1>

            <NuevoProyecto />

            <div className='proyectos'>
                <h2>Tus Proyectos</h2>
                <Listado />
            </div>
        </aside>
    )
}
