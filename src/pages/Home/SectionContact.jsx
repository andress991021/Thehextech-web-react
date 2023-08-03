import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Button } from "../../components";
import ImageContact from "../../assets/Contact/ImageContact.png";

export const SectionContact = ({
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
  const { t } = useTranslation();
  return (
    <div className="w-screen  md:w-full lg:flex items-center ">
      <div className="lg:w-1/2">
        <img className="w-full" src={ImageContact} alt="" />
      </div>
      <div className="lg:w-1/2 pt-8 lg:pt-8   p-5 rounded-t-3xl">
        <h2 className=" text-2xl  font-bold ">{t("main.title")}</h2>
        <form onSubmit={handleSubmit} className="space-y-2 lg:space-y-3 mt-2">
          <div>
            <input
              type="text"
              value={Nombre}
              className="block p-3 w-full border-green bg-blue text-base lg:text-lg  rounded-lg border dark:placeholder-white"
              placeholder="Nombre*"
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={Email}
              className="block p-3 w-full border-green bg-blue text-base lg:text-lg  rounded-lg border dark:placeholder-white"
              placeholder="Correo Electronico*"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="number"
              value={Telefono}
              className="block p-3 w-full border-green bg-blue text-base lg:text-lg  rounded-lg border dark:placeholder-white"
              placeholder="Teléfono"
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={Empresa}
              className="block p-3 w-full border-green bg-blue text-base lg:text-lg  rounded-lg border dark:placeholder-white"
              placeholder="Empresa"
              onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <textarea
              value={Mensaje}
              rows="6"
              className="block p-3 w-full border-green bg-blue text-base lg:text-lg  rounded-lg border dark:placeholder-white"
              placeholder="Message"
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
          </div>
          <div className="text-base lg:text-lg  text-right pt-2" type="submit">
            <Button type="main" name="ENVIAR" rute="" />
          </div>
        </form>
      </div>
    </div>
  );
};

SectionContact.propTypes = {
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
