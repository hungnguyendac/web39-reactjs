import React from "react";
import TopBar from "../components/TopBar";
import SideBarMenu from "../components/SideBarMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <TopBar />
            <SideBarMenu />
            <Outlet />
        </>
    );
};

export default Layout;
