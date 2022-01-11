import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

export default function FormTarea() {

    //Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Si no hya proyecto selecionado
    if(!proyecto) return null;

    //Extraer proyecto
    const [ proyectoActual ] = proyecto;

    return (
        <div className='formulario'>
            <form>
                <div className='contenedor-input'>
                    <input
                        type="text"
                        className="input-text"
                        placeholder='Nombre de la tarea'
                        name="nombre"
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
