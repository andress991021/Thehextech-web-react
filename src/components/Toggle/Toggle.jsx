import React from "react";
import LanguageSpanish from "../../assets/Icons/LanguageSpanish.svg"
import LanguageEnglish from "../../assets/Icons/LanguageEnglish.svg"



export const  Toggle = ({isActive,handleToggle}) => {
    return(
        <div className="flex items-center">
            <img src={LanguageSpanish} alt="" className="w-8 mx-2" />
            <button
                className={`${
                isActive ? 'bg-red' : 'bg-yellow'
                } w-12 h-6 rounded-full focus:outline-none`}
                onClick={handleToggle}
            >
                <span
                className={`${
                    isActive ? 'translate-x-3 bg-blue-900' : '-translate-x-3 bg-blue'
                } inline-block w-5 h-5 rounded-full  shadow transform transition-transform mt-0.5`}
                />
            </button>
            <img src={LanguageEnglish} alt="" className="w-8 mx-2" />
        </div>
    )
}