import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Button } from "../../components";

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
    <div className="w-screen  md:w-full">
      <div className="pt-8 lg:pt-8   p-5 rounded-t-3xl">
        <h2 className=" text-2xl  font-bold ">{t("main.title")}</h2>

        <form onSubmit={handleSubmit} className="space-y-2 lg:space-y-3 mt-2">
          <div>
            <input
              type="text"
              value={Nombre}
              className="shadow-sm bg-blue  border border-gray-300   text-base lg:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-brown-600  dark:placeholder-white  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Nombre*"
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={Email}
              className="block p-3 w-full bg-blue text-base lg:text-lg  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-brown-600  dark:placeholder-white  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Correo Electronico*"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="number"
              value={Telefono}
              className="block p-3 w-full bg-blue text-base lg:text-lg   rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-brown-600  dark:placeholder-white  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Teléfono"
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={Empresa}
              className="block p-3 w-full bg-blue text-base lg:text-lg  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-brown-600  dark:placeholder-white  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Empresa"
              onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <textarea
              value={Mensaje}
              rows="6"
              className="block p-2.5 w-full bg-blue text-base lg:text-lg   rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-brown-600  dark:placeholder-white  dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
