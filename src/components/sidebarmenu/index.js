import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ElectricScooter from "@mui/icons-material/ElectricScooter";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import LocationIcon from "@mui/icons-material/LocationOn";
import Dashboard from "@mui/icons-material/Dashboard";
import OtherIcon from "@mui/icons-material/Lock";
import styles from "./styles.module.css";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EarbudsBattery from "@mui/icons-material/EarbudsBattery";

function SideBarMenu() {
    const [open, setOpen] = useState(true);
    const [selectedMenuItem, setSelectedMenuItem] = useState("");
    const [showSubMenu, setShowSubMenu] = useState(false);

    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleMenuNavigation = (item) => {
        setSelectedMenuItem(item);
        if (item === "Profile details") {
            navigate("/profiledetails");
        } else if (item === "Live location") {
            navigate("/livelocation");
        } else if (item === "Dashboard") {
            // Toggle submenu visibility when Dashboard is clicked
            setShowSubMenu((prevState) => !prevState);
        } else if (item === "Remote lock") {
            navigate("/remotelock");
        }
    };

    const handleSubmenuClick = (item) => {
        if (item === "VCU") {
            navigate("/dashboard/vcu");
        }
        if (item === "VEHICLE") {
            navigate("/dashboard/vehicle");
        }
        if (item === "BMS") {
            navigate("/dashboard/bms");
        }
    };

    const subMenuItems = ["VCU", "VEHICLE", "BMS"];

    // Rough mapping of icons for menu items
    const menuIconMapping = {
        "Profile details": <ProfileIcon />,
        "Live location": <LocationIcon />,
        Dashboard: <Dashboard />,
        "Remote lock": <OtherIcon />,
    };

    // Rough mapping of icons for submenu items
    const submenuIconMapping = {
        VCU: <InboxIcon />,
        VEHICLE: <ElectricScooter />,
        BMS: <EarbudsBattery />,
    };

    return (
        <div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation">
                    <List>
                        {[
                            { text: "Profile details" },
                            { text: "Live location" },
                            {
                                text: "Dashboard",
                                hasDropdown: true,
                                submenuItems: subMenuItems,
                            },
                            { text: "Remote lock" },
                        ].map((item, index) => (
                            <div key={item.text}>
                                <ListItem
                                    disablePadding
                                    onClick={() =>
                                        handleMenuNavigation(item.text)
                                    }>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {menuIconMapping[item.text]}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} />
                                        {item.hasDropdown && (
                                            <IconButton size="small">
                                                <ArrowDropDownIcon />
                                            </IconButton>
                                        )}
                                    </ListItemButton>
                                </ListItem>
                                {item.submenuItems &&
                                    selectedMenuItem === "Dashboard" &&
                                    showSubMenu && (
                                        <List>
                                            {item.submenuItems.map(
                                                (subItem, subIndex) => (
                                                    <ListItem
                                                        key={subIndex}
                                                        disablePadding
                                                        onClick={() =>
                                                            handleSubmenuClick(
                                                                subItem
                                                            )
                                                        }>
                                                        <ListItemButton>
                                                            <ListItemIcon>
                                                                {
                                                                    submenuIconMapping[
                                                                        subItem
                                                                    ]
                                                                }
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                primary={
                                                                    subItem
                                                                }
                                                            />
                                                        </ListItemButton>
                                                    </ListItem>
                                                )
                                            )}
                                        </List>
                                    )}
                            </div>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}

export default SideBarMenu;
