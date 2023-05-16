import React from "react";
import personaje from "../../assets/personaje.png"
export const  CardLoad = ({image,name}) => {
    return(
      <div className="flex flex-col shadow-lg rounded-3xl w-full h-full p-0.5 sm:p-1.5 group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 cursor-pointer">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 sm:p-5 rounded-3xl bg-gray-900 group-hover:bg-opacity-0 ">
          <div className="w-3/4 h-full ">
            <img className="w-full h-full group-hover:lg:translate-y-5 hover:lg:transition duration-500 opacity-100 hover:opacity-100" src={image} alt="" />
          </div>
          <h1 className="text-white text-base text-center sm:text-2xl lg:text-xl font-extralight lg:font-medium hover:lg:transition duration-500">{name}</h1>
        </div>
      </div>
    )
}