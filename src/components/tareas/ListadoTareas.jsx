import React from 'react'
import Tarea from './Tarea'

export default function ListadoTareas() {

    const tareasProyecto = [
        {nombre: 'Elegir colores', estado: true},
        {nombre: 'Elegir tema', estado: false},
        {nombre: 'plataforma de pago', estado: true},
        {nombre: 'Serviodres', estado: false}
    ]

    return (
        <>
            <h2>Proyecto: Tienda Virtual</h2>
            
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
