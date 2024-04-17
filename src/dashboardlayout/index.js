import React from "react";
import DashBoard from "../pages/dashboard";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
    return (
        <React.Fragment>
            <DashBoard />
            <Outlet />
        </React.Fragment>
    );
};

export default DashBoardLayout;
