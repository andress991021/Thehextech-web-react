import React from "react";
import Logo2 from "../../assets/Logos/TheHextech.svg";
import { useTranslation } from "react-i18next";
import { Button } from "../../components";
import instagram from "../../assets/Icons/Instagram.png";
import linkedin from "../../assets/Icons/linkedin.png";
export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className=" bg-blue shadow">
      <div className=" mx-auto p-4 md:py-8">
        <div className="flex md:inline justify-between">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-4 sm:mb-0">
              <img
                src={Logo2}
                className="w-36 h-10 lg:w-60 lg:h-16"
                alt="Logo"
              />
            </a>
            <ul className="lg:flex  justify-between  items-center mb-6 text-sm font-medium sm:mb-0 dark:text-gray-400">
              <li className="lg:flex justify-center items-center">
                <a
                  href="#"
                  className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-base font-medium  text-white hover:text-cyan-500 "
                >
                  {t("Header.Home")}
                </a>
              </li>
              <li className="lg:flex justify-center items-center">
                <a
                  href="#seccionWeb"
                  className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-base font-medium  text-white hover:text-cyan-500"
                >
                  {t("Header.ServicesWeb")}
                </a>
              </li>
              <li className="lg:flex justify-center items-center">
                <a
                  href="#seccion3D"
                  className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-base font-medium  text-white hover:text-cyan-500"
                >
                  {t("Header.Services3D")}
                </a>
              </li>
              <li className="lg:flex justify-center items-center">
                <a
                  href="#seccionOurWork"
                  className="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-base font-medium  text-white hover:text-cyan-500"
                >
                  {t("Header.Our Work")}
                </a>
              </li>
              <li className="lg:flex justify-center items-center mx-6 my-4">
                <Button
                  type="main"
                  name={t("Header.About Us")}
                  rute="#seccionContact"
                  size=""
                />
              </li>
            </ul>
          </div>
          <div className="mr-10 h-fit my-auto space-y-5">
            <a href="https://www.instagram.com/thehextechstudios/">
              <img
                src={instagram}
                alt=""
                className="w-12 h-12 md:hidden opacity-60 hover:opacity-100 mb-5"
              />
            </a>
            <a href="https://www.linkedin.com/company/98518178/admin/feed/posts/">
              <img
                src={linkedin}
                alt=""
                className="w-12 h-12 md:hidden opacity-60 hover:opacity-100 mt-5"
              />
            </a>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-400 lg:my-8 " />
        <div className="flex lg:justify-between items-center lg:px-10">
          <span className=" block text-base lg:text-lg text-white text-center font-extralight ">
            {" "}
            <a href="" className="hover:underline"></a> {t("Footer.title")}
          </span>
          <div className="mr-20 hidden md:block lg:flex space-x-5">
            <a href="https://www.instagram.com/thehextechstudios/">
              <img
                src={instagram}
                alt=""
                className="w-12 cursor-pointer opacity-60 hover:opacity-100"
              />
            </a>
            <a href="https://www.linkedin.com/company/98518178/admin/feed/posts/">
              <img
                src={linkedin}
                alt=""
                className="w-12 cursor-pointer opacity-60 hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
