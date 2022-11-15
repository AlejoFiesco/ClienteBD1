import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './tablaGuardados.css';

export const TablaGuardados = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    buscar().then(() => console.log(registros));
  }
  ,[]);

  const buscar = async () => {
    axios.get('http://localhost:5000/buscar/select correo, nombres, apellidos from empleado')
      .then(result => {
        setRegistros(result.data);
      });
  }

  const eliminar = async (correo) => {
    axios.get('http://localhost:5000/eliminar/' + correo)
      .then((result) => {
        console.log(result);
        buscar();
      })
  }

  return(
    <div className="registros">
      { registros.length === 0 
      ? <>No hay registros</> 
      : <>
        {registros.map((registro, index) => 
        <div className="registro" key={index}>
          <span>{ registro[1] }</span>
          <span>{ registro[2] }</span>
          <button className="boton rojo" onClick={() => eliminar(registro[0])}>Eliminar</button>
          <Link className="boton amarillo" to={`/detalles/${registro[0]}`}>Detalles</Link>
        </div>
      )}
      </>}
    </div>
  );
};
