import React, { useState } from "react";
import { Button,Card,ChatBot } from "../../components";
import { useTranslation } from "react-i18next";
import imagen from "../../assets/Header.jpg";
import Ecommerce from "../../assets/Ecommerce.svg";
import VirtualReality from "../../assets/VR.png";
import Web from "../../assets/Web.svg";
import ImageWeb from "../../assets/imageWeb.svg";
import ImageWeb2 from "../../assets/imageWeb2.svg";
import ImageRa from "../../assets/imageRa.svg";
import FotoAndres from "../../assets/FotoHV1.png";
import Logo from "../../assets/Logo&Letra.svg";


export const SectionOne = () => {
    const [isHovered, setIsHovered] = useState(true);
    const{t} = useTranslation();
    //sm md lg xl 2xl
    const handleHover = () => {
        setIsHovered(true);
      };
    const handleMouseLeave = () => {
        setIsHovered(false);
      };


    const sizeClass = isHovered ? "lg:w-1/2" : "lg:w-1/2"; // Aquí definimos las clases de estilo que queremos aplicar
    return( 
        <div className="w-full">
            <div className="h-screen lg:flex ">
                <div className={`h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center bg-gray-900 bg-bannerWeb bg-blend-color-dodge hover:bg-blend-multiply delay-500 bg-cover px-10 md:px-16 lg:px-auto shadow-2xl lg:float-right hover:text-cyan-500 hover:lg:w-3/4 transition duration-1000 hover:ease-in-out group  `}>
                    <div className="w-full pt-2 sm:pt-5 md:pt-10 xl:pt-20 pb-10 sm:pb-20 xl:pb-32 sm:w-full lg:w-3/4">
                        <h1 className="text-xl sm:text-2xl lg:text-2xl font-medium mt-5 tracking-tight">{t("main.title")}</h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight" >{t("main.subtitle")}</h1>
                        <h1 className="text-base sm:text-xl lg:text-xl mt-2 mb-5 lg:opacity-0 group-hover:lg:opacity-90 lg:h-0 group-hover:h-fit font-extralight tracking-tight"  >{t("main.description")}</h1>
                        <Button type="main" name={t("main.buttonContact")} zize="text-sm"/>
                    </div>
                </div>
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center bg-gray-900 bg-bannerRa bg-blend-color-dodge hover:bg-blend-multiply  bg-cover  px-10 md:px-16 lg:px-auto shadow-2xl hover:text-cyan-500 hover:lg:w-3/4 hover:transition duration-500 ease-in-out group"  onMouseLeave={handleMouseLeave} onMouseEnter={handleHover}  >
                    <div className="w-full pt-2 sm:pt-5 md:pt-10 xl:pt-20 pb-10 sm:pb-20 xl:pb-32 sm:w-full lg:w-3/4">
                        <h1 className="text-xl sm:text-2xl   lg:text-2xl  font-medium mt-5 tracking-tight ">{t("main.titleTwo")}</h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3  tracking-tight" >{t("main.subtitleTwo")}</h1>
                        <h1 className="text-base sm:text-xl lg:text-xl mt-2 mb-5 lg:opacity-0 group-hover:lg:opacity-90 lg:h-0 group-hover:h-fit font-extralight tracking-tight" >{t("main.descriptionTwo")}</h1>
                        <Button type="main" name={t("main.buttonContactTwo")} zize="text-sm"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

