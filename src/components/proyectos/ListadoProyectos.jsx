import React, { useEffect, useContext } from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'

export default function Listado() {

    //Extraer los proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //Obtener proyectos cuando cargue el componente
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, [])

    //Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>Por el momento... 😈</p>;

    return (
        <ul className='listado-proyectos'>
            {proyectos.map((proyecto) => (
                <Proyecto key={proyecto.id} proyecto={proyecto}/>
            ))}
        </ul>
    )
}
