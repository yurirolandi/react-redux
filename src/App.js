import React from 'react';
import './App.css';
import Media from './components/Media/Media.jsx'
import Soma from './components/Soma/Soma.jsx'
import Sorteio from './components/Sorteio/Sorteio.jsx'
import Intervalo from './components/Intervalo/Intervalo.jsx';

function App() {


  return (
    <div className="App">
      <h1>Exercicio React - Redux</h1>
      <div className="linha">
        <Intervalo
          
        />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
