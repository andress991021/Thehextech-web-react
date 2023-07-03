import React from "react";
import { useTranslation } from "react-i18next";

//Icons
import iconWeb1 from "../../assets/ServicesDeveloper/Icon1.svg";
import iconWeb2 from "../../assets/ServicesDeveloper/Icon2.svg";
import iconWeb3 from "../../assets/ServicesDeveloper/Icon3.svg";
import iconWeb4 from "../../assets/ServicesDeveloper/Icon4.svg";
import ImageWeb from "../../assets/ServicesDeveloper/imageWeb.svg";

export const SectionDeveloper = () => {

    const{t} = useTranslation();

    return( 
        <section className="bg-ServicesWeb bg-fixed ">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                {/*SECTION1*/}
                <img className="w-full order-1 md:order-1" src={ImageWeb} alt=""/>
                <div className="mt-4 md:mt-0 order-2 md:order-2">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("WebSection.title")}</h2>
                    <p className="mb-6 font-normal md:text-lg text-white">{t("WebSection.description")}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-2  ">
                        <div className="flex items-center bg-black bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={iconWeb1} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("WebSection.card1")}</p>
                        </div>
                        <div className="flex items-center bg-black bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={iconWeb2} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("WebSection.card2")}</p>
                        </div>
                        <div className="flex items-center bg-black bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={iconWeb3} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("WebSection.card3")}</p>
                        </div>
                        <div className="flex items-center bg-black bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={iconWeb4} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("WebSection.card4")}</p>
                        </div>
                    </div>
                </div>

                {/*SECTION2*/}
                <img className="w-full mt-10 md:mt-0 order-3 md:order-4 " src={ImageWeb} alt=""/>
                <div className="mt-4 md:mt-0 order-4 md:order-3">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("WebSection.title")}</h2>
                    <p className="mb-6 font-normal md:text-lg text-white">{t("WebSection.description")}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-2  ">
                        <div className="flex items-center bg-black bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={iconWeb1} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("WebSection.card1")}</p>
                        </div>
                        <div className="flex items-center bg-black bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={iconWeb2} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("WebSection.card2")}</p>
                        </div>
                        <div className="flex items-center bg-black bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={iconWeb3} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("WebSection.card3")}</p>
                        </div>
                        <div className="flex items-center bg-black bg-opacity-30 shadow-xl p-5 rounded-2xl">
                            <img src={iconWeb4} alt="" className="w-10 mr-2" />
                            <p className=" font-light md:text-lg text-white">{t("WebSection.card4")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

