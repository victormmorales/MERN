import React, { useState } from 'react'

export default function NuevoProyecto() {

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

        //Agragar al state

        //reiniciar form
    }

    return (
        <>
            <button
                type="button"
                className='btn btn-block btn-primario'
            >Nuevo Proyecto</button>

            <form className='formulario-nuevo-proyecto' onSubmit={onSubmitProyecto}>
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
        </>
    )
}
