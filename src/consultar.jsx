import { TablaGuardados } from "./tablaGuardados";
import './consultar.css';

export const Consultar = () => {
  return (
    <div className="contenedor-tabla">
      <h1>Empleados registrados</h1>
      <TablaGuardados />
    </div>
  );
};
