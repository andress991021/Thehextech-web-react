import React from "react";
import { Button } from "../../components";
import { useTranslation } from "react-i18next";

export const SectionOurWork = () => {

    const{t} = useTranslation();
    return( 
        <section class="bg-bue">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center">
                    <h2 class="mb-4 text-3xl tracking-tight font-bold sm:text-4xl text-white">Take A Quick Tour Of TechAIr</h2>
                    <p class="mx-auto mb-8 max-w-2xl font-base  md:mb-12 sm:text-xl text-white">Watch This Video To Learn All About Our AI Voice Technology And How To Use It In Your Products.</p>
                    <form action="#">
                        <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0 flex justify-center">
                            <div>
                                <Button type="main" name={t("main.buttonContact")}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}