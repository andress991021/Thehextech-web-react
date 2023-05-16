import React from "react";
import {createBrowserRouter } from "react-router-dom";
import { Home,Contact } from "../pages";
import { Menu } from "../containers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu> <Home/> </Menu>
    },
    {
        path: '/Contact',
        element: <Menu> <Contact/> </Menu>
    }
]);

