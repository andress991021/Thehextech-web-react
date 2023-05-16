import React, { useState } from "react";
import { Button,Card } from "../../components";
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

//iconos 
import iconWeb1 from "../../assets/web/icon1.svg";
import iconWeb2 from "../../assets/web/icon2.svg";
import iconWeb3 from "../../assets/web/icon3.svg";
import iconWeb4 from "../../assets/web/icon4.svg";

import iconRa1 from "../../assets/ra/icon1.svg";
import iconRa2 from "../../assets/ra/icon2.svg";
import iconRa3 from "../../assets/ra/icon3.svg";
import iconRa4 from "../../assets/ra/icon4.svg";

import iconAnimacion1 from "../../assets/animacion/icon1.svg";
import iconAnimacion2 from "../../assets/animacion/icon2.svg";
import iconAnimacion3 from "../../assets/animacion/icon3.svg";
import iconAnimacion4 from "../../assets/animacion/icon4.svg";


export const Home = () => {
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
        <div className="w-full ">
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



            <div className=" pb-10  ">
                <div className="bg-gray-800 bg-opacity-100 px-5 sm:px-10 md:px-16 lg:px-20 py-5">
                    <h1 className="text-3xl xl:text-5xl font-medium lg:mt-10 text-center lg:mx-20 tracking-tight  ">{t("titleSections.title")}</h1>
                    <h1 className="text-base sm:text-xl my-5 text-center px-2 sm:px-10 md:px-20 xl:px-60 font-extralight tracking-tight">{t("titleSections.subtitle")}</h1>                   

                </div>
                {/*--------------- WEB APP DEVELOPMENT --------------- */}
                <div className="lg:flex lg:justify-around px-5 py-5  sm:px-10 md:px-16 lg:px-20 lg:my-10">
                    <div className="w-full text-center lg:text-left  sm:mx-5 lg:mx-10 lg:mr-20 order-1">
                        <h1 className="text-3xl xl:text-4xl font-medium ">{t("WebSection.title")}</h1>
                        <p className="text-base my-5 ps-2 font-extralight ">{t("WebSection.description")}</p>
                        <div className="lg:flex lg:justify-between">
                     
                            <div className="flex items-center bg-gray-800 bg-opacity-30 shadow-xl lg:w-1/2 p-5 rounded-2xl my-5 lg:mr-4 lg:my-0">
                                <img className="w-12 lg:mr-4" src={iconWeb1} alt="" />
                                <h1 className="font-medium text-sm text-white ">{t("WebSection.card1")}</h1>
                            </div>
                            <div className="flex items-center bg-gray-800 bg-opacity-30 shadow-xl lg:w-1/2 p-5 rounded-2xl my-5 lg:ml-4 lg:my-0">
                                <img className="w-12 lg:mr-4" src={iconWeb2} alt="" />
                                <h1 className="font-medium text-sm text-white ">{t("WebSection.card2")}</h1>
                            </div>
                        </div>
                        <div className="lg:flex lg:justify-around mt-5"> 
                            <div className="flex items-center bg-gray-800 bg-opacity-30 shadow-xl lg:w-1/2 p-5 rounded-2xl my-5 lg:mr-4 lg:my-0">
                                <img className="w-12 lg:mr-4" src={iconWeb3} alt="" />
                                <h1 className="font-medium text-sm text-white ">{t("WebSection.card3")}</h1>
                            </div>
                            <div className="flex items-center bg-gray-800 bg-opacity-30 shadow-xl lg:w-1/2 p-5 rounded-2xl my-5 lg:ml-4  lg:my-0 ">
                                <img className="w-12 lg:mr-4" src={iconWeb4} alt="" />
                                <h1 className="font-medium text-sm text-white ">{t("WebSection.card4")}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-full order-2 ">
                        <img className="w-full mx-auto rounded-2xl " src={ImageWeb} alt="" />
                    </div>
                </div> 

                {/*--------------- VR TRAINING EXPERIENCES --------------- */}
                <div className="lg:flex lg:justify-around px-5 py-5  sm:px-10 md:px-16 lg:px-20 lg:my-10">

                    <div className="w-full text-center lg:text-left  sm:mx-5 lg:mx-10 lg:ml-20 order-2 ">
                        <h1 className="text-3xl xl:text-4xl font-medium  ">{t("VRSection.title")}</h1>
                        <p className="text-base my-5 ps-2 font-extralight ">{t("VRSection.description")} </p>
                        <div className="lg:flex lg:justify-between">
                            <div className="flex items-center bg-gray-800 bg-opacity-30 shadow-xl lg:w-1/2 p-5 rounded-2xl my-5 lg:mr-4 lg:my-0">
                                <img className="w-12 lg:mr-4" src={iconRa1} alt="" />
                                <h1 className="font-medium text-sm text-white ">{t("VRSection.card1")}</h1>
                            </div>
                            <div className="flex items-center bg-gray-800 bg-opacity-30 lg:w-1/2 p-5 rounded-2xl my-5 lg:ml-4 lg:my-0">
                                <img className="w-12 lg:mr-4" src={iconRa2} alt="" />
                                <h1 className="font-medium text-sm text-white">{t("VRSection.card2")}</h1>
                            </div>
                        </div>
                        <div className="lg:flex lg:justify-around mt-5"> 
                            <div className="flex items-center bg-gray-800 bg-opacity-30 shadow-xl lg:w-1/2 p-5 rounded-2xl my-5 lg:mr-4 lg:my-0">
                                <img className="w-12 lg:mr-4" src={iconRa3} alt="" />   
                                <h1 className="font-medium text-sm text-white ">{t("VRSection.card3")}</h1>
                            </div>
                            <div className="flex items-center bg-gray-800 bg-opacity-30 shadow-xl lg:w-1/2 p-5 rounded-2xl my-5 lg:ml-4  lg:my-0 ">
                                <img className="w-12 lg:mr-4" src={iconRa4} alt="" />
                                <h1 className="font-medium text-sm text-white ">{t("VRSection.card4")}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-full order-1  ">
                        <img className="w-full mx-auto rounded-2xl" src={ImageWeb2} alt="" />
                    </div>
                </div>   

                {/*--------------- ANIMATION --------------- */}
                <div className="lg:flex lg:justify-around px-5 py-5  sm:px-10 md:px-16 lg:px-20 lg:my-10">
                    <div className="w-full text-center lg:text-left  sm:mx-5 lg:mx-10 lg:mr-20 ">
                        <h1 className="text-3xl xl:text-4xl font-medium  ">{t("AnimationSection.title")}</h1>
                        <p className="text-base my-5 ps-2 font-extralight ">{t("AnimationSection.description")}</p>
                        <div className="lg:flex lg:justify-between">
                            <div className="flex items-center bg-gray-800 bg-opacity-30 shadow-xl lg:w-1/2 p-5 rounded-2xl my-5 lg:mr-4 lg:my-0">
                                <img className="w-12 lg:mr-4" src={iconAnimacion1} alt="" />
                                <h1 className="font-medium text-sm text-white ">{t("AnimationSection.card1")}</h1>
                            </div>
                            <div className="flex items-center bg-gray-800 bg-opacity-30 shadow-xl lg:w-1/2 p-5 rounded-2xl my-5 lg:ml-4 lg:my-0">
                                <img className="w-12 lg:mr-4" src={iconAnimacion2} alt="" />
                                <h1 className="font-medium text-sm text-white ">{t("AnimationSection.card2")}</h1>
                            </div>
                        </div>
                        <div className="lg:flex lg:justify-around mt-5"> 
                            <div className="flex items-center bg-gray-800 bg-opacity-30  shadow-xl lg:w-1/2 p-5 rounded-2xl my-5 lg:mr-4 lg:my-0">
                                <img className="w-12 lg:mr-4" src={iconAnimacion3} alt="" />
                                <h1 className="font-medium text-sm text-white ">{t("AnimationSection.card3")}</h1>
                            </div>
                            <div className="flex items-center bg-gray-800 bg-opacity-30 shadow-xl lg:w-1/2 p-5 rounded-2xl my-5 lg:ml-4  lg:my-0 ">
                                <img className="w-12 lg:mr-4" src={iconAnimacion4} alt="" />
                                <h1 className="font-medium text-sm text-white ">{t("AnimationSection.card4")}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  ">
                        <img className="w-full mx-auto rounded-2xl" src={ImageRa} alt="" />
                    </div>
                </div> 
            </div>

            {/*--------------- OURWORK --------------- */}
            <div className=" ">
                <div className="bg-gray-800 bg-opacity-100 px-5 sm:px-10 md:px-16 lg:px-20 py-5">
                    <h1 className="text-3xl xl:text-5xl font-medium lg:my-10 text-center lg:mx-20 tracking-tight">{t("FirstSection.title")}</h1>
                </div>
            </div>

            <div className="my-8 px-5 sm:px-10 md:px-16 xl:px-20">
                <div className="flex flex-wrap justify-around">
                    <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4  px-2 mb-4">
                        <Card image={Ecommerce} name={t("FirstSection.card1")}/>
                    </div>
                    <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
                        <Card image={VirtualReality} name={t("FirstSection.card2")} />
                    </div>
                    <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
                        <Card image={Web} name={t("FirstSection.card3")} />
                    </div>
                </div>
            </div>


            {/*--------------- ABOUT US --------------- */}
            <div className=""> 
                <div className="bg-gray-800 bg-opacity-100 px-5 sm:px-10 md:px-16 lg:px-20 py-5">
                    <h1 className="text-3xl xl:text-5xl font-medium lg:my-10 text-center lg:mx-20 ">{t("AboutUs.title")}</h1>
                </div>

                <div className="lg:flex lg:justify-between px-5 sm:px-10 md:px-16 lg:px-20 py-10 ">

                    {/*--------------- PROFILE ANDRES --------------- */}
                    <div class="max-w-sm rounded overflow-hidden shadow-xl order-1    ">
                        <img class="w-full rounded-2xl " src={FotoAndres} alt=""/>

                        <div class="py-4 px-10">
                            <div class="text-3xl xl:text-4xl font-medium mb-2">{t("AboutUs.profile1")}</div>
                            <p class="text-white font-extralight text-base">{t("AboutUs.description1")} </p>
                        </div>
                        <div class="pt-4 pb-4 px-10">
                            <span class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">{t("AboutUs.profession1")}</span>
                        </div>
                    </div>
                    
                    {/*--------------- PROFILE JUAN --------------- */}
                    <div class="max-w-sm rounded overflow-hidden shadow-xl order-3 mt-10 lg:mt-0 ">
                        <img class="w-full rounded-2xl" src={FotoAndres} alt=""/>

                        <div class="py-4 px-10">
                            <div class="text-3xl xl:text-4xl font-medium mb-2">{t("AboutUs.profile2")}</div>
                            <p class="text-white font-extralight text-base">{t("AboutUs.description2")}</p>
                        </div>
                        <div class="pt-4 pb-4 px-10">
                            <span class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">{t("AboutUs.profession2")}</span>
                        </div>
                    </div>

                    {/*--------------- TIME LINE --------------- */}
                    <div class="w-full lg:w-1/3 h-full order-2">
                        <div class="relative wrap overflow-hidden py-10 lg:px-5 h-full">
                            <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-[50%] " ></div>
                            <div class="mb-8 flex justify-between items-center w-full right-timeline  ">
                                <div class="order-1 w-5/12"></div>
                                <div class=" flex items-center order-1 bg-gray-800 shadow-xl w-fit p-2 h-8 rounded-full">
                                    <h1 class="mx-auto font-semibold text-lg text-white">{t("timeline.title1")}</h1>
                                </div>
                                <div class="order-1 shadow-xl rounded-lg  w-5/12 px-2 py-4">
                                    <p class="text-sm font-extralight  leading-snug tracking-wide text-white text-opacity-100">{t("timeline.description1")}</p>
                                </div>
                            </div>
                        
                            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div class="order-1 w-5/12"></div>
                                <div class=" flex items-center order-1 bg-gray-800 shadow-xl w-fit p-2 h-8 rounded-full">
                                    <h1 class="mx-auto text-white font-semibold text-lg">{t("timeline.title2")}</h1>
                                </div>
                                <div class="order-1 rounded-xl shadow-xl w-5/12 px-2 py-4">
                                    <p class="text-sm font-extralight leading-snug tracking-wide text-white text-opacity-100">{t("timeline.description2")}</p>
                                </div>
                            </div>
                        
                            <div class=" flex justify-between items-center w-full right-timeline  ">
                                <div class="order-1 w-5/12"></div>
                                <div class=" flex items-center order-1 bg-gray-800 shadow-xl w-fit p-2 h-8 rounded-full">
                                    <h1 class="mx-auto font-semibold text-lg text-white">{t("timeline.title3")}</h1>
                                </div>
                                <div class="order-1 shadow-xl rounded-lg  w-5/12 px-2 py-4">
                                    <p class="text-sm font-extralight  leading-snug tracking-wide text-white text-opacity-100">{t("timeline.description3")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*--------------- PROYECTS NUM --------------- */}
                <div className="mb-10">
                    <div class="grid grid-cols-3 p-4   md:p-8 ">
                            <div class="flex flex-col items-center justify-center">
                                <h1 class="lg:lg:mb-2 text-3xl font-extrabold">73M+</h1>
                                <h1 class="text-gray-500 dark:text-gray-400">Developers</h1>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <h1 class="lg:mb-2 text-3xl font-extrabold">73M+</h1>
                                <h1 class="text-gray-500 dark:text-gray-400">Developers</h1>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <h1 class="lg:mb-2 text-3xl font-extrabold">73M+</h1>
                                <h1 class="text-gray-500 dark:text-gray-400">Developers</h1>
                            </div>      
                    </div>
                </div>




                {/*--------------- OUR CLIENTS--------------- */}
                <div className="">
                    <div className="bg-gray-800 bg-opacity-100 px-5 sm:px-10 md:px-16 lg:px-20 py-5">
                        <h1 className="text-3xl xl:text-5xl font-medium lg:my-10 text-center lg:mx-20 ">{t("ourclients.title")}</h1>
                    </div>
                    <div class="grid grid-cols-3 p-4   md:p-8 ">
                            <div class="flex flex-col items-center justify-center">
                                <h1 class="lg:lg:mb-2 text-3xl font-extrabold">73M+</h1>
                                <h1 class="text-gray-500 dark:text-gray-400">Developers</h1>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <h1 class="lg:mb-2 text-3xl font-extrabold">73M+</h1>
                                <h1 class="text-gray-500 dark:text-gray-400">Developers</h1>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <h1 class="lg:mb-2 text-3xl font-extrabold">73M+</h1>
                                <h1 class="text-gray-500 dark:text-gray-400">Developers</h1>
                            </div>      
                    </div>
                </div>

                {/*--------------- CONTACT--------------- */}
                <div>
                    <div className="lg:flex lg:justify-startitems-center bg-gradient-to-br from-gray-950 to-gray-900  bg-opacity-100 px-5 sm:px-10 md:px-16 lg:px-20 pt-10 pb-10 lg:pt-20 lg:pb-20">
                        <div>
                            <h1 className="text-3xl xl:text-5xl font-medium my-2 lg:my-5  lg:mx-20  ">{t("preContact.title")}</h1>
                            <h1 className="text-base sm:text-xl my-2  lg:mx-20 font-extralight tracking-tight">{t("preContact.description")}</h1> 
                        </div>
                        <div className="my-5 lg:my-10 ">
                            <a href="/Contact">
                                <Button type="main" name={t("preContact.Button")} zize="text-sm"/>
                            </a>
                        </div>
                        
                    </div>
                </div>
                

                {/*--------------- FOOTER --------------- */}
                <footer class=" bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                    <div class="mx-auto p-4 md:py-8">
                        <div class="sm:flex sm:items-center sm:justify-between">
                            <a href="" class="flex items-center mb-4 sm:mb-0">
                                <img src={Logo} class="w-36 h-10 lg:w-60 lg:h-16" alt="Flowbite Logo" />

                            </a>
                            <ul class="lg:flex  justify-between  items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                <li className="lg:flex justify-center items-center">
                                    <a href="#" class="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-lg lg:text-lg font-medium  text-white hover:text-cyan-500 ">{t("Header.Home")}</a>
                                </li>
                                <li className="lg:flex justify-center items-center">
                                    <a href="#" class="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-lg lg:text-lg font-medium  text-white hover:text-cyan-500">{t("Header.Services")}</a>
                                </li>
                                <li className="lg:flex justify-center items-center">
                                    <a href="#" class="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-lg lg:text-lg font-medium  text-white hover:text-cyan-500">{t("Header.Our Work")}</a>
                                </li>
                                <li className="lg:flex justify-center items-center">
                                    <a href="#" class="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-lg lg:text-lg font-medium  text-white hover:text-cyan-500">{t("Header.Blog")}</a>
                                </li>
                                <li className="lg:flex justify-center items-center">
                                    <a href="/Contact" class="mx-6 lg:ml-0 lg:text-center  py-auto flex items text-lg lg:text-lg font-medium  text-white hover:text-cyan-500">{t("Header.About Us")}</a>
                                </li>
                            </ul>
                        </div>
                        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="https://flowbite.com/" class="hover:underline"></a> {t("Footer.title")}</span>
                    </div>
                </footer>

                
            </div>


        </div>
    )
}

