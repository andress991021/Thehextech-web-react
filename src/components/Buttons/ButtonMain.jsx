import React from "react";
import PropTypes from "prop-types";

export const ButtonMain = ({ name, rute }) => 
{
 

  return (
    <div>
      <a
        href={rute} 
        className="cursor-pointer relative rounded text-sm lg:text-lg px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
      >
        {/*<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>*/}
        <span className="relative">{name}</span>
      </a>
    </div>
  );
};

ButtonMain.propTypes = {
  name: PropTypes.string.isRequired,
  rute: PropTypes.string.isRequired,
};
