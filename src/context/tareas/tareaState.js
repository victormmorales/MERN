import React, { useReducer } from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer';

const TareaState = props => {
    const initialState = {
        tareas: [
            {nombre: 'Elegir colores', estado: true, proyectoId: 1},
            {nombre: 'Elegir tema', estado: false , proyectoId: 2},
            {nombre: 'plataforma de pago', estado: true, proyectoId: 3},
            {nombre: 'Serviodres', estado: false, proyectoId: 4},
            {nombre: 'Elegir colores', estado: true, proyectoId: 1},
            {nombre: 'Elegir tema', estado: false , proyectoId: 2},
            {nombre: 'plataforma de pago', estado: true, proyectoId: 3},
            {nombre: 'Elegir colores', estado: true, proyectoId: 4},
            {nombre: 'Elegir tema', estado: false , proyectoId: 1},
            {nombre: 'plataforma de pago', estado: true, proyectoId: 2},
            {nombre: 'Elegir colores', estado: true, proyectoId: 3},
            {nombre: 'Elegir tema', estado: false , proyectoId: 4},
            {nombre: 'plataforma de pago', estado: true, proyectoId: 3}
        ],
    }

    //crear dispatch y state
    const [ state, dispatch ] = useReducer(TareaReducer, initialState);

    return (
        <TareaContext.Provider
        value={{
            tareas: state.tareas
        }}>
            {props.children}
        </TareaContext.Provider>
    )
}
 
export default TareaState;
