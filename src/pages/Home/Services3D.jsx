import React from "react";
import { Button } from "../../components";
import { useTranslation } from "react-i18next";

//Icons
import icon3D1 from "../../assets/Services3D/Icon1.svg";
import icon3D2 from "../../assets/Services3D/Icon2.svg";
import icon3D3 from "../../assets/Services3D/Icon3.svg";
import icon3D4 from "../../assets/Services3D/Icon4.svg";
import Image3D from "../../assets/Services3D/image3D.svg";
import Imagen from "../../assets/Services3D/imagen.png";
export const Section3D = () => {

    const { t } = useTranslation();
    return (
        <section className="bg-blue bg-cover bg-fixed  bg-opacity-80">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                {/*SECTION1*/}
                <img className="w-full order-1 md:order-1" src={Imagen} alt="" />
                <div className="mt-4 md:mt-0 order-2 md:order-2">
                    <h2 className="mb-4 text-4xl text-center lg:text-left  font-bold  text-white">{t("3DSection.title")}</h2>
                    <p className="mb-6 font-normal md:text-lg text-white">{t("3DSection.description")}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-2  ">
                        <div className="flex items-center bg-white bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={icon3D1} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("3DSection.card1")}</p>
                        </div>
                        <div className="flex items-center bg-white bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={icon3D2} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("3DSection.card2")}</p>
                        </div>
                        <div className="flex items-center bg-white bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={icon3D3} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("3DSection.card3")}</p>
                        </div>
                        <div className="flex items-center bg-white bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={icon3D4} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("3DSection.card4")}</p>
                        </div>
                    </div>
                </div>

                {/*SECTION2*/}
                <img className="w-full mt-10 md:mt-0 order-3 md:order-4 " src={Image3D} alt="" />
                <div className="mt-4 md:mt-0 order-4 md:order-3">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">{t("3DSection2.title")}</h2>
                    <p className="mb-6 font-normal md:text-lg text-white">{t("3DSection2.description")}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-2  ">
                        <div className="flex items-center bg-white bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={icon3D1} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("3DSection2.card1")}</p>
                        </div>
                        <div className="flex items-center bg-white bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={icon3D2} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("3DSection2.card2")}</p>
                        </div>
                        <div className="flex items-center bg-white bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={icon3D3} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("3DSection2.card3")}</p>
                        </div>
                        <div className="flex items-center bg-white bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={icon3D4} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("3DSection2.card4")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

