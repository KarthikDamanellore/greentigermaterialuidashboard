import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout";
import ProfileDetails from "../pages/profiledetails";
import LiveLocation from "../pages/livelocation";
import DashBoard from "../pages/dashboard";
import RemoteLock from "../pages/remotelock";
import VCU from "../pages/vcu";
import Vehicle from "../pages/vehicle";
import BMS from "../pages/bms";
import DashBoardLayout from "../dashboardlayout";

const AppRouts = () => {
    return useRoutes([
        {
            // path: "/login",
            // element:"loginpage component"
            path: "",
            element: <Layout />,
            children: [
                {
                    path: "/profiledetails",
                    element: <ProfileDetails />,
                },
                {
                    path: "/livelocation",
                    element: <LiveLocation />,
                },
                {
                    path: "/dashboard",
                    element: <DashBoardLayout />,
                    children: [
                        {
                            path: "vcu",
                            element: <VCU />,
                        },
                        {
                            path: "vehicle",
                            element: <Vehicle />,
                        },
                        {
                            path: "bms",
                            element: <BMS />,
                        },
                    ],
                },
                {
                    path: "/remotelock",
                    element: <RemoteLock />,
                },
            ],
        },
    ]);
};

export default AppRouts;
