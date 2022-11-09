
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { Index } from './inicio';
import { Registrar } from './registrar';
import { Consultar } from './consultar';
import { Editar } from './editar';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/consultar" element={<Consultar />}/>
        <Route path="/registrar" element={<Registrar />}/>
        <Route path="/editar" element={<Editar />}/>
      </Routes>
    </div>
  );
}

export default App;
