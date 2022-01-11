import React, { useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext';

export default function FormTarea() {

    //Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener las funciones y state del context
    const tareasContext = useContext(tareaContext);
    const { agregarTarea } = tareasContext

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

        //pasar validacion

        //agregar nueva tarea
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        //reiniciar form
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
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    )
}
