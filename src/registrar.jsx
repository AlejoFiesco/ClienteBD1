import { useState } from "react";
import './registrar.css';
import axios from 'axios';

export const Registrar = () =>{
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const registrar = () => {
        axios.get(`http://localhost:5000/agregar/${nombres.trim()}/${apellidos.trim()}/${correo.trim()}/${contrasena.trim()}`)
            .then(result => {
                console.log(result);
                setNombres(''); 
                setApellidos(''); 
                setCorreo(''); 
                setContrasena(''); 
            })
    }

    return (
        <div className="registrar">
            <h1>Registrar Usuario</h1>
            <form>
                <input type="text" onChange={(e) => setNombres(e.target.value)} value={nombres} placeholder="Nombres" required/>
                <input type="text" onChange={(e) => setApellidos(e.target.value)} value={apellidos} placeholder="Apellidos" required/>
                <input type="email" onChange={(e) => setCorreo(e.target.value)} value={correo} placeholder="Correo" required/>
                <input type="password" onChange={(e) => setContrasena(e.target.value)} value={contrasena} placeholder="Contraseña" required/>
                <button className="azul" type="button" onClick={() => registrar()}>Enviar</button>
            </form>
        </div>
    );
}