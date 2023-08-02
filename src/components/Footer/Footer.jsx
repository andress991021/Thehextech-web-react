import React from "react";
import Logo from "../../assets/Logo&Letra.svg";
import { useTranslation } from "react-i18next";

export const  Footer = () => {
    const{t} = useTranslation();

    return(
        <footer className=" bg-blue shadow">
            <div className="mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="" className="flex items-center mb-4 sm:mb-0">
                        <img src={Logo} className="w-36 h-10 lg:w-60 lg:h-16" alt="Flowbite Logo" />
                    </a>
                    <ul className="lg:flex  justify-between  items-center mb-6 text-sm font-medium sm:mb-0 dark:text-gray-400">
                        <li className="lg:flex justify-center items-center">
                            <a href="#" className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-base font-medium  text-white hover:text-cyan-500 ">{t("Header.Home")}</a>
                        </li>
                        <li className="lg:flex justify-center items-center">
                            <a href="#" className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-base font-medium  text-white hover:text-cyan-500">{t("Header.Services")}</a>
                        </li>
                        <li className="lg:flex justify-center items-center">
                            <a href="#" className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-base font-medium  text-white hover:text-cyan-500">{t("Header.Our Work")}</a>
                        </li>
                        <li className="lg:flex justify-center items-center">
                            <a href="#" className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-base font-medium  text-white hover:text-cyan-500">{t("Header.Blog")}</a>
                        </li>
                        <li className="lg:flex justify-center items-center">
                            <a href="/Contact" className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-base font-medium  text-white hover:text-cyan-500">{t("Header.About Us")}</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-400 lg:my-8" />
                <span className="block text-sm text-white sm:text-center "> <a href="" className="hover:underline"></a> {t("Footer.title")}</span>
            </div>
        </footer>  
    );
}