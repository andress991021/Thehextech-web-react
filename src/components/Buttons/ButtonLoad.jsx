import React from "react";
import { ButtonMain } from "./ButtonMain";

export const ButtonLoad = ({type,name,zize}) => {
    if(type==='main')return (<ButtonMain name={name} zize={zize}/>);
}