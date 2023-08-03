import React from "react";
import PropTypes from "prop-types";
import { SectionOne } from "./SectionOne";
import { SectionDeveloper } from "./ServicesDeveloper";
import { Section3D } from "./Services3D";
import { SectionOurWork } from "./SectionOurWork";
import { SectionContact } from "./SectionContact";
import { Footer } from "../../components";

export const Home = ({
  Nombre,
  Email,
  Telefono,
  Empresa,
  Mensaje,
  setNombre,
  setEmail,
  setTelefono,
  setEmpresa,
  setMensaje,
  handleSubmit,
}) => {
  return (
    <>
      <SectionOne />
      <div className="lg:px-20">
        <section id="seccionWeb">
        <SectionDeveloper />
        </section>
        <section id="seccion3D">
        <Section3D />
        </section>
        <section id="seccionOurWork">
        <SectionOurWork />
        </section>
        <section id="seccionContact">
          <SectionContact
            Nombre={Nombre}
            Email={Email}
            Telefono={Telefono}
            Empresa={Empresa}
            Mensaje={Mensaje}
            setNombre={setNombre}
            setEmail={setEmail}
            setTelefono={setTelefono}
            setEmpresa={setEmpresa}
            setMensaje={setMensaje}
            handleSubmit={handleSubmit}
          />
        </section>
      </div>
      <div className="border-t-gray-400">
        <Footer />
      </div>
    </>
  );
};

Home.propTypes = {
  Nombre: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
  Telefono: PropTypes.string.isRequired,
  Empresa: PropTypes.string.isRequired,
  Mensaje: PropTypes.string.isRequired,
  setNombre: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setTelefono: PropTypes.func.isRequired,
  setEmpresa: PropTypes.func.isRequired,
  setMensaje: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
