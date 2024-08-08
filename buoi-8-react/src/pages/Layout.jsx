import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBarMenu from "../components/SideBarMenu";

const Layout = () => {
    return (
        <>
            <Header/>
            <SideBarMenu />
            <Outlet />
        </>
    )
};

export default Layout;
