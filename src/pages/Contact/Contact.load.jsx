import React from "react";
import { Contact } from "./Contact";

export const ContactLoad = () => {

    const [Nombre, setNombre] = useState('');
    const [Email, setEmail] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Empresa, setEmpresa] = useState('');
    const [Mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        console.log('Formulario Enviado Correctamente');
        SendForm(Nombre,Email,Telefono,Empresa,Mensaje);
      };

    return (
        <Contact
            Nombre={Nombre} Email={Email} Telefono={Telefono} Empresa={Empresa} Mensaje={Mensaje}
            setNombre={setNombre} setEmail={setEmail} setTelefono={setTelefono} setEmpresa={setEmpresa} setMensaje={setMensaje}
            handleSubmit={handleSubmit} 
        />
    )
}