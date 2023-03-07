import { useState } from 'react'
import './Campo.css'
const Campo = (props) => {

   
    


    const aoDigitado = (evento) => {

        props.aoAlterado(evento.target.value)

    }

    return(
        <div className={`campo-texto campo-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type={props.type === undefined ? 'text' : props.type} 
                value={props.valor} onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={props.placeholder}/>
        </div>
    )
}

export default Campo;