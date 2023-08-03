import React from "react";
import {createBrowserRouter } from "react-router-dom";
import { Home} from "../pages";
import { Menu } from "../containers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu> <Home/> </Menu>
    },

]);

