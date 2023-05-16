import React from "react";
import i18next from "../../translations/Translations"
import { useTranslation } from "react-i18next";
import { Button } from "../../components";
import Logo from "../../assets/Logo&Letra.svg";

export const Menu =({open,toggleOpen,...props}) =>{

    const{t} = useTranslation();
    
    return(
        <div>
        <div className="h-screen  ">
        <header className=" ">
        <div className=" relative z-20 shadow-2x  ">
        <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4 w-full fixed z-10  lg:static bg-gray-900">
          <div className="flex items-center justify-between">
            <div className="relative z-20 ">
              <a href="#">
                <img src={Logo} alt="logo-Hextech" className="w-36 h-10 lg:w-60 lg:h-16"/>
              </a>
            </div>

            <div className="flex items-center justify-end  lg:border-l-0 ">
              <input type="checkbox" id="hamburger" className="peer" hidden/>
              <label htmlFor="hamburger" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
              </label>

              <div className=" z-10 peer-checked:-translate-x-0 fixed inset-0 w-[calc(100%)] translate-x-[100%] bg-gray-900  shadow-xl transition duration-500 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                  <ul className="px-6 pt-32 text-gray-700 space-y-8  lg:space-y-0 lg:flex lg:space-x-5  lg:pt-0">
                    <li className="lg:flex justify-center items-center">
                        <a className="ml-6 lg:ml-0 lg:text-center my-auto text-4xl lg:text-lg font-medium text-white hover:text-cyan-500" href="/">{t("Header.Home")}</a>  
                    </li>
                    <li className="lg:flex justify-center items-center">
                        <a className="ml-6 lg:ml-0 lg:text-center  my-auto text-4xl lg:text-lg font-medium text-white hover:text-cyan-500" href="/">{t("Header.Services")}</a>  
                    </li>
                    <li className="lg:flex justify-center items-center">
                        <a className="ml-6 lg:ml-0 lg:text-center my-auto text-4xl lg:text-lg font-medium text-white hover:text-cyan-500" href="/">{t("Header.Our Work")}</a>
                    </li>
                    <li className="lg:flex justify-center items-center">
                        <a className="ml-6 lg:ml-0 lg:text-center  py-auto flex items text-4xl lg:text-lg font-medium  text-white hover:text-cyan-500" href="/">{t("Header.Blog")}</a>
                    </li>
                    <li  className="lg:flex justify-center items-center">
                        <a className=" my-auto lg:text-lg font-medium   text-white hover:text-cyan-500" href="/Contact"><Button type="main" name={t("Header.About Us")} zize="text-4xl"/></a>
                    </li>
                  </ul>
                  <div className="py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-2">
                        <a className="ml-6 lg:ml-0 px-4 py-2 my-auto text-lg font-medium hover:text-red relative" onClick={toggleOpen}>
                            Language
                            {open &&
                                <div className="absolute top-full left-0 w-full  shadow-lg rounded-lg py-2">
                                <button className="block w-full text-left px-4 py-2 " onClick={() => i18next.changeLanguage("en")}>English</button>
                                <button className="block w-full text-left px-4 py-2 " onClick={() => i18next.changeLanguage("es")}>Español</button>
                                </div>
                            }
                        </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.children}
    </div>
    
  </header>
  
                        </div>
    
       
        </div>
    )
}