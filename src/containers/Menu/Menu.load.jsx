import React, { useState } from "react";
import { Menu } from "./Menu";



export const MenuLoad = ({...props}) => {

    const [open, setOpen] = useState(false);  
    const toggleOpen = () => {
        setOpen(!open) 
    };

    return(
        <Menu
            open={open}
            toggleOpen={toggleOpen}
            {...props}
        />
    );


}