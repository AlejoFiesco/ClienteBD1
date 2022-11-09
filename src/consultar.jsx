import { TablaGuardados } from "./tablaGuardados";
import './consultar.css';

export const Consultar = () => {
  return (
    <div className="contenedor-tabla">
      <h1>Datos guardados</h1>
      <TablaGuardados />
    </div>
  );
};
