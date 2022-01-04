import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NuevaCuenta() {

    // State inicar sesion:
    const [ usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault();

        //validacion

        //pasword min. 6 caracteres

        //passwords iguales

        //pasarlo action
    }

    return (
        <div className='form-usuario'>
            <div className="contenedor-form sombra-dark">
                <h1>Crear Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu contraseña"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className='btn btn-primario btn-block' value="Registrar" />
                    </div>
                </form>
                <Link to="/" className='enlace-cuenta'>Volver a Iniciar Sesión</Link>
            </div>
        </div>
    )
}
