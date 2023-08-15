import React from "react";
import PropTypes from "prop-types";
import { ButtonMain } from "./ButtonMain";

export const ButtonLoad = ({ type, name, rute, size }) => {
  if (type === "main") return <ButtonMain name={name} rute={rute} size={size} />;
};

ButtonLoad.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rute:  PropTypes.string.isRequired,
  size:  PropTypes.string.isRequired,
};
