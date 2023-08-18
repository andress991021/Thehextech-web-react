import React from "react";
import { Button } from "../../components";
import { useTranslation } from "react-i18next";
import portafolio from "../../assets/Portafolio/Portafolio.pdf"
import Video from "../../assets/Video/reel.mp4"

export const SectionOurWork = () => {
  const { t } = useTranslation();

  
  return (
    <section className="bg-bue">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-white">
          {t("OurWork.title")}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-extralight  md:mb-12 sm:text-xl text-white">
          {t("OurWork.description")}
          </p>
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0 flex justify-center">
              <div>
                <Button type="main" name={t("OurWork.buttonPortfolio")} rute={portafolio} size="" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center px-2 md:px-5 lg:px-16">
        <video
          className="w-full h-auto max-w-full border border-gray-400 rounded-lg dark:border-gray-70"
          controls
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
