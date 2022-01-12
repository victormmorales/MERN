import React, { useContext } from 'react'
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

export default function ListadoTareas() {

    //Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext

    //Si no hya proyecto selecionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>;

    //Extraer proyecto
    const [ proyectoActual ] = proyecto;

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }

    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            
            <ul className='listado-tareas'>
                { tareasproyecto.length === 0
                ? ( <li className='tarea'><p>No hay tareas... 🙄</p></li>)
                :  <TransitionGroup>
                    {tareasproyecto.map(tarea => (
                        <CSSTransition
                            key={tarea.id}
                            timeout={200}
                            classNames="tarea"
                        >
                            <Tarea tarea={tarea} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </>
    )
}
