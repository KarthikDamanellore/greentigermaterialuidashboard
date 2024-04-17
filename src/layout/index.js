import React from "react";
import Header from "../components/header";
import SideBarMenu from "../components/sidebarmenu";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className={styles.layOutContainerStyles}>
            <Header />
            <SideBarMenu />
            <Outlet />
        </div>
    );
};

export default Layout;
