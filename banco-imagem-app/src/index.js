import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from '../src/components/header/header';
import Banco from '../src/components/menuBanco/menuBanco';
import Imagem from '../src/components/menuImagem/menuImagem';
import Corpo from '../src/components/corpo/corpo';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banco />
    <Imagem />
    <Corpo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
