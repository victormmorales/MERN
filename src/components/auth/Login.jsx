import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

    // State inicar sesion:
    const [ usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault();

        //validacion

        //pasarlo action
    }

    return (
        <div className='form-usuario'>
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
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

                    <div className="campo-form">
                        <input type="submit" className='btn btn-primario btn-block' value="Iniciar Sesión" />
                    </div>
                </form>
                <Link to="/nueva-cuenta" className='enlace-cuenta'>Crear cuenta</Link>
            </div>
        </div>
    )
}
