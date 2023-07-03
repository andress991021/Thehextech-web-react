import React from "react";
import { Button } from "../../components";
import { useTranslation } from "react-i18next";

export const SectionOurWork = () => {

    const{t} = useTranslation();
    return( 
        <section class="bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center">
                    <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
                    <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                    <form action="#">
                        <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0 flex justify-center">
                            <div>
                                <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer sm:rounded-none sm:rounded-r-lg ">Conocer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}