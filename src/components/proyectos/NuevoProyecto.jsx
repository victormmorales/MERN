import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function NuevoProyecto() {

    //Obtener state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;

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
        e.preventDefauly();

        //validadr proyecto
        if(nombre === '') {
            return;
        };

        //Agragar al state
        agregarProyecto(proyecto)

        //reiniciar form
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
        </>
    )
}
