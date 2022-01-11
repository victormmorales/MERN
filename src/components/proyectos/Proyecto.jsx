import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

export default function Proyecto({ proyecto }) {

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext

    return (
            <li>
                <button
                    type="button"
                    className="btn btn-blank"
                    onClick={ () => proyectoActual(proyecto.id) }
                >{proyecto.nombre}</button>
            </li>
    )
}
