import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BarraSuperior from './Componentes/barraSuperior';
import BarraLateral from './Componentes/barraLateral';
import MarcoPpal from './Componentes/marcoPpal';
import './Estilos/estilos.css';
import {
  BrowserRouter 
} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>

    <div className="App">
      <header className="App-header">
        <BarraSuperior/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      
      <main>
        <BarraLateral/>
        <MarcoPpal /> 
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
