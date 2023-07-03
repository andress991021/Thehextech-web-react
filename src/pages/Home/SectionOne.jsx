import React from "react";
import { Button } from "../../components";
import { useTranslation } from "react-i18next";

export const SectionOne = () => {

    const{t} = useTranslation();
    return( 
        <div>
            <div className="h-screen max-h-[calc(100vh-2.5rem)] md:max-h-[calc(100vh-6rem)]  lg:flex pt-10 md:pt-0 ">
                <div className={`h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center bg-gray-900 bg-bannerWeb bg-blend-color-dodge hover:bg-blend-multiply delay-500 bg-cover px-10 md:px-16 lg:px-auto shadow-2xl lg:float-right hover:text-cyan-500 hover:lg:w-3/4 transition duration-1000 hover:ease-in-out group  `}>
                    <div className="w-full pt-2 sm:pt-5 md:pt-10 xl:pt-20 pb-10 sm:pb-20 xl:pb-32 sm:w-full lg:w-3/4">
                        <h1 className="text-xl sm:text-2xl lg:text-2xl font-medium mt-5 tracking-tight">{t("main.title")}</h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 tracking-tight" >{t("main.subtitle")}</h1>
                        <h1 className="text-base sm:text-xl lg:text-xl mt-2 mb-5 lg:opacity-0 group-hover:lg:opacity-90 lg:h-0 group-hover:h-fit font-extralight tracking-tight"  >{t("main.description")}</h1>
                        <Button type="main" name={t("main.buttonContact")} zize="text-sm"/>
                    </div>
                </div>
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center bg-gray-900 bg-bannerRa bg-blend-color-dodge hover:bg-blend-multiply  bg-cover  px-10 md:px-16 lg:px-auto shadow-2xl hover:text-cyan-500 hover:lg:w-3/4 hover:transition duration-500 ease-in-out group">
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

