import React from "react";
import { SectionOne } from "./SectionOne";
import { SectionDeveloper } from "./ServicesDeveloper";
import { Section3D } from "./Services3D";
import { SectionOurWork } from "./SectionOurWork";
import { SectionContact } from "./SectionContact";
import { Footer } from "../../components";
Footer

export const Home = () => {

    return( 
        <>
            <SectionOne/>
            <SectionDeveloper/>
            <Section3D/>
            <SectionOurWork/>
            <SectionContact/>
            <Footer/>
            
        </>
    )
}

