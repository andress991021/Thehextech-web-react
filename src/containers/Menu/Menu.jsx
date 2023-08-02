import React from "react";
import i18next from "../../translations/Translations"
import { useTranslation } from "react-i18next";
import { Button,Toggle } from "../../components";
import Logo from "../../assets/Logo&Letra.svg";

export const Menu =({open,toggleOpen,...props}) =>{

    const{t} = useTranslation();
    
    return(
        <div>
        <div className="h-screen  ">
        <header className=" ">
        <div className=" relative z-20 shadow-2x  ">
        <div className="border-b border-b-gray-400">
        <div className="px-6 lg:container   lg:mx-auto  lg:py-6 w-full fixed z-10  lg:static bg-blue ">
          <div className="flex items-center justify-between lg:justify-between">
            <div className="relative z-20  ">
              <a href="#">
                <img src={Logo} alt="logo-Hextech" className=" h-10 w-fit  "/>
              </a>
            </div>

            <div className="flex items-center justify-end  lg:border-l-0 ">
              <input type="checkbox" id="hamburger" className="peer" hidden/>
              <label htmlFor="hamburger" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
              </label>

              <div className="z-10 peer-checked:-translate-x-0 fixed inset-0 w-[calc(100%)] translate-x-[100%] bg-blue  shadow-xl transition duration-500 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                  <ul className="px-6 pt-32 text-gray-700 space-y-8  lg:space-y-0 lg:flex justify-start lg:space-x-14  lg:pt-0">
                    <li className="lg:flex justify-center items-center">
                        <a className="ml-6 lg:ml-0 lg:text-center my-auto text-2xl lg:text-base font-bold text-white hover:text-cyan-500" href="/">{t("Header.Home")}</a>  
                    </li>
                    <li className="lg:flex justify-center items-center">
                        <a className="ml-6 lg:ml-0 lg:text-center  my-auto text-2xl lg:text-base font-medium text-white hover:text-cyan-500" href="/">{t("Header.Services")}</a>  
                    </li>
                    <li className="lg:flex justify-center items-center">
                        <a className="ml-6 lg:ml-0 lg:text-center  my-auto text-2xl lg:text-base font-medium text-white hover:text-cyan-500" href="/">{t("Header.Services")}</a>  
                    </li>
                    <li className="lg:flex justify-center items-center">
                        <a className="ml-6 lg:ml-0 lg:text-center my-auto text-2xl lg:text-base font-medium text-white hover:text-cyan-500" href="/">{t("Header.Our Work")}</a>
                    </li>
                    <li className="lg:flex justify-center items-center">
                        <a className="ml-6 lg:ml-0 lg:text-center  py-auto flex items text-2xl lg:text-base font-medium  text-white hover:text-cyan-500" href="/">{t("Header.Blog")}</a>
                    </li>
                    <li  className="lg:flex justify-center items-center">
                      <a className="my-auto font-medium text-white hover:text-cyan-500 hidden lg:block" href="/Contact"><Button type="main" name={t("Header.About Us")} zize="text-base"/></a>
                        <a className="ml-6 my-auto font-medium   text-white hover:text-cyan-500 block lg:hidden" href="/Contact"><Button type="main" name={t("Header.About Us")} zize="text-2xl"/></a>
                    </li>
                  </ul>
                  <div className="py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-2">
                    <Toggle/>
                       
                  </div>
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