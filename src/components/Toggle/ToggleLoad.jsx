import React,{ useState }  from "react";
import { Toggle } from "./Toggle";
import i18next from "../../translations/Translations"

export const  ToggleLoad = () => {

    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
      setIsActive(!isActive);
        isActive ? i18next.changeLanguage("es"):i18next.changeLanguage("en")

    };


    return(
        <Toggle
            handleToggle={handleToggle}
            isActive={isActive}

        />
    )
}