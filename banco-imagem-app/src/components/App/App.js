import React from 'react';
import './App.css';
import Header from '../header/header';
import Banco from '../menuBanco/menuBanco';
import Imagem from '../menuImagem/menuImagem';
import Corpo from '../corpo/corpo';


function App() {
  return (
    <div className="App">
      <Header />
      <Banco />
      <Imagem />
      <Corpo />
    </div>
  );
}

export default App;
