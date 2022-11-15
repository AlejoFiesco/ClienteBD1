import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./detalles.css";

export const Detalles = () => {
  let { user } = useParams();
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  useEffect(() => {
    if (user) {
      let query = `http://localhost:5000/buscar/select correo, nombres, apellidos, contrasena from empleado WHERE correo = '${user}'`;
      axios.get(query)
        .then((result) => result.data[0])
        .then((result) => {
          setNombres(result[1].trim())
          setApellidos(result[2].trim())
          setCorreo(result[0].trim())
          setContrasena(result[3])
        });
    }
  }, []);

  const guardar = () => {
    
  };

  return (
    <div className="detalles">
      <h1>Detalles empleado </h1>
      <div className="datos">
        <span className="dato">
          <span className="tipo">Nombres:</span> 
          <span className="contenido">{ `${nombres}` }</span>
          </span>
        <span className="dato">
          <span className="tipo">Apellidos:</span> 
          <span className="contenido">{ `${apellidos}` }</span>
          </span>
        <span className="dato">
          <span className="tipo">Correo:</span> 
          <span className="contenido">{ `${correo}` }</span>
          </span>
      </div>
    </div>
  );
};
