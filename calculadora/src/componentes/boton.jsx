import React from 'react'

import '../hojas-de-estilo/boton.css'

function Boton(props) {
  return (
    <div
      className={`boton-contenedor${props.operador ? ' operador' : ''}`}
      onClick={() => props.manejarClick(props.operador || props.children)}
    >
      {props.children}
    </div>
  )
}

export default Boton