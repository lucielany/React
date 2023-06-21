import './App.css';
import Boton from './componentes/boton.jsx';
import Contador from './componentes/contador.jsx';
import freecodecampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumclicks] = useState(0);


const manejarClick = () => {
  setNumclicks (numClicks + 1);
}

const reiniciarContador = () => {
  setNumclicks(0);
}

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
        className="freecodecamp-logo"
        src={freecodecampLogo}
        alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
        texto="Reiniciar"
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
