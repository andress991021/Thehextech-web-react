import React from "react";
import { Button } from "../../components";
import { useTranslation } from "react-i18next";

export const Section3D = () => {

    const{t} = useTranslation();
    return( 
        <div className=" pb-10  ">
            <div className="bg-gray-800 bg-opacity-100 px-5 sm:px-10 md:px-16 lg:px-20 py-5">
                <h1 className="text-3xl xl:text-5xl font-medium lg:mt-10 text-center lg:mx-20 tracking-tight  ">{t("titleSections.title")}</h1>
                <h1 className="text-base sm:text-xl my-5 text-center px-2 sm:px-10 md:px-20 xl:px-60 font-extralight tracking-tight">{t("titleSections.subtitle")}</h1>                   
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
    )
}

