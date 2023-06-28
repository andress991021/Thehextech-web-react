import React from "react";
import Logo from "../../assets/Logo&Letra.svg";

export const  Footer = () => {
    return(
        <footer className=" bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="" className="flex items-center mb-4 sm:mb-0">
                        <img src={Logo} className="w-36 h-10 lg:w-60 lg:h-16" alt="Flowbite Logo" />
                    </a>
                    <ul className="lg:flex  justify-between  items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li className="lg:flex justify-center items-center">
                            <a href="#" className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-lg lg:text-lg font-medium  text-white hover:text-cyan-500 ">{t("Header.Home")}</a>
                        </li>
                        <li className="lg:flex justify-center items-center">
                            <a href="#" className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-lg lg:text-lg font-medium  text-white hover:text-cyan-500">{t("Header.Services")}</a>
                        </li>
                        <li className="lg:flex justify-center items-center">
                            <a href="#" className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-lg lg:text-lg font-medium  text-white hover:text-cyan-500">{t("Header.Our Work")}</a>
                        </li>
                        <li className="lg:flex justify-center items-center">
                            <a href="#" className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-lg lg:text-lg font-medium  text-white hover:text-cyan-500">{t("Header.Blog")}</a>
                        </li>
                        <li className="lg:flex justify-center items-center">
                            <a href="/Contact" className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-lg lg:text-lg font-medium  text-white hover:text-cyan-500">{t("Header.About Us")}</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="https://flowbite.com/" className="hover:underline"></a> {t("Footer.title")}</span>
            </div>
        </footer>  
    );
}