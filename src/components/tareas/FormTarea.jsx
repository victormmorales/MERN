import React, { useContext, useState, useEffect } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext';

export default function FormTarea() {

    //Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener las funciones y state del context
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext

    //effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada)
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);

    //state form
    const [ tarea, guardarTarea ] = useState({
        nombre: ''
    })

    //Extraer nombre proyecto
    const { nombre } = tarea;

    //Si no hya proyecto selecionado
    if(!proyecto) return null;

    //Extraer proyecto
    const [ proyectoActual ] = proyecto;

    //Leer los valores del form
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar
        if(nombre.trim() === ''  ) {
            validarTarea();
            return;
        }

        //Revisar si es edicion o crear tarea
        if(tareaseleccionada === null) {
            //Tarea nueva: se agrega al state
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            //actualizar tarea existente
            actualizarTarea(tarea);

            //elimina la tarea seleccionada del state
            limpiarTarea();
        }

        //obtener y filtrar tareas del proyecto
        obtenerTareas(proyectoActual.id);

        //reiniciar formulario
        guardarTarea({
            nombre: ''
        })
    }

    return (
        <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >
                <div className='contenedor-input'>
                    <input
                        type="text"
                        className="input-text"
                        placeholder='Nombre de la tarea'
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={ tareaseleccionada ? 'Editar Tarea' : "Agregar Tarea" }
                    />
                </div>
            </form>
            { errortarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
        </div>
    )
}
