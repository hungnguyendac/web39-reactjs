import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/user/common/Header";
import Footer from "../../components/user/common/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
