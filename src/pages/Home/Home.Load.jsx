import React, { useState } from "react";
import { Home } from "./Home";
import { SendForm } from "../../Apis/SendForm";
export const HomeLoad = () => {

    const [Nombre, setNombre] = useState('');
    const [Email, setEmail] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Empresa, setEmpresa] = useState('');
    const [Mensaje, setMensaje] = useState('');

    const handleSubmit = () => {
        console.log('Formulario Enviado Correctamente');
        SendForm(Nombre,Email,Telefono,Empresa,Mensaje);
      };


    return(
        <Home
        Nombre={Nombre} Email={Email} Telefono={Telefono} Empresa={Empresa} Mensaje={Mensaje}
        setNombre={setNombre} setEmail={setEmail} setTelefono={setTelefono} setEmpresa={setEmpresa} setMensaje={setMensaje}
        handleSubmit={handleSubmit} 
        />
    )
}


