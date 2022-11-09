import { Link } from "react-router-dom";
import './inicio.css';

export const Index = () => {
  return (
    <div id="index">
      <h1>Seleccione la acción a realizar</h1>
      <div className="selector">
        <Link to="/registrar" className="link center-v azul">Registrar</Link>
        <Link to="/consultar" className="link center-v verde">Consultar</Link>
      </div>
      
    </div>
  );
};
