import { useState } from 'react'
import { evaluate } from 'mathjs'

import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/boton.jsx'
import Pantalla from './componentes/pantalla.jsx'
import BotonClear from './componentes/botonClear.jsx'

import './App.css'

function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    setInput((input + val).trim())
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("Por favor ingrese valores.")
    }
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp" />
      </div>
      <div
        className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput} operador="+">
            +
          </Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput} operador="-">
            &ndash;
          </Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput} operador="*">
            <span style={{ transform: 'rotate(45deg)' }}>+</span>
          </Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput('')}>
            C
          </BotonClear>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput} operador=".">
            .
          </Boton>
          <Boton manejarClick={agregarInput} operador="/">
            /
          </Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado} operador="=">
            =
          </Boton>
        </div>
      </div>
    </div>
  )
}

export default App
