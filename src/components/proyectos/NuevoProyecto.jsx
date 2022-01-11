import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function NuevoProyecto() {

    //Obtener state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    const [ proyecto, guardarProyecto ] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto
        if(nombre === '') {
            mostrarError();
            return;
        }

        // agregar al state
        agregarProyecto(proyecto)

        // Reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }
    //Mostrar formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return (
        <>
            <button
                type="button"
                className='btn btn-block btn-primario'
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>

           { formulario 
           ? (  <form className='formulario-nuevo-proyecto' onSubmit={onSubmitProyecto}>
                <input
                    type="text"
                    className='input-text'
                    placeholder='Nombre del proyecto'
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />

                <input
                    type="submit"
                    className='btn btn-primario btn-block'
                    value="Agregar Proyecto"
                />
            </form>
            ) : null }

            { errorformulario ? <p className='mensaje error'>El nombre es obligatorio</p> : null}
        </>
    )
}
