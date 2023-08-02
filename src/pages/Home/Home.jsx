import React from "react";
import { SectionOne } from "./SectionOne";
import { SectionDeveloper } from "./ServicesDeveloper";
import { Section3D } from "./Services3D";
import { SectionOurWork } from "./SectionOurWork";
import { SectionContact } from "./SectionContact";
import { Footer } from "../../components";
Footer

export const Home = ({Nombre,Email,Telefono,Empresa,Mensaje, setNombre,setEmail,setTelefono,setEmpresa,setMensaje,handleSubmit}) => {

    return( 
        <>
        <SectionOne/>
        <div className="lg:px-20">
            <SectionDeveloper/>
            <Section3D/>
            <SectionOurWork/>
            <SectionContact
                  Nombre={Nombre} Email={Email} Telefono={Telefono} Empresa={Empresa} Mensaje={Mensaje}
                  setNombre={setNombre} setEmail={setEmail} setTelefono={setTelefono} setEmpresa={setEmpresa} setMensaje={setMensaje}
                  handleSubmit={handleSubmit} 
            />
        </div>
        <div className="border-t-gray-400">
            <Footer/>
        </div>
        </>
    )
}

