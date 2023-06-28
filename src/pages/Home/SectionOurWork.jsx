import React from "react";
import { Button } from "../../components";
import { useTranslation } from "react-i18next";

export const SectionOurWork = () => {

    const{t} = useTranslation();
    return( 
        <div>
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
        </div>
    )
}