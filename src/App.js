
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Index } from './inicio';
import { Registrar } from './registrar';
import { Consultar } from './consultar';
import { Detalles } from './detalles';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/consultar" element={<Consultar />}/>
        <Route path="/registrar" element={<Registrar />}/>
        <Route path="/detalles/:user" element={<Detalles />}/>
      </Routes>
    </div>
  );
}

export default App;
