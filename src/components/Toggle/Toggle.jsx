import React from "react";
import LanguageSpanish from "../../assets/Icons/LanguageSpanish.svg"
import LanguageEnglish from "../../assets/Icons/LanguageEnglish.svg"
import Colombia from "../../assets/Icons/colombia.png"
import EEUU from "../../assets/Icons/eeuu.png"



export const Toggle = ({ isActive, handleToggle }) => {
    return (
        <div className="flex items-center">
            <img src={Colombia} alt="" className="w-8 mx-2" />
            <button
                className={`${isActive ? 'bg-red' : 'bg-yellow'
                    } w-12 h-6 rounded-full focus:outline-none`}
                onClick={handleToggle}
            >
                <span
                    className={`${isActive ? 'translate-x-3 bg-blue-900' : '-translate-x-3 bg-blue-500'
                        } inline-block w-5 h-5 rounded-full  shadow transform transition-transform mt-0.5`}
                />
            </button>
            <img src={EEUU} alt="" className="w-8 mx-2" />
        </div>
    )
}