import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

const accordionData = [
    {
        title: "Accordion 1",
        buttons: ["REMOTE LOCK", "IGNITION LOCK", "BMS LOCK", "WHEEL LOCK"],
    },
    {
        title: "Accordion 2",
        buttons: ["REMOTE LOCK", "IGNITION LOCK", "BMS LOCK", "WHEEL LOCK"],
    },
    {
        title: "Accordion Actions",
        buttons: ["REMOTE LOCK", "IGNITION LOCK", "BMS LOCK", "WHEEL LOCK"],
    },
];

function AccordionUsage() {
    const defaultExpandedIndex = 0;

    return (
        <div className={styles.remoteLockStyles}>
            <div className={styles.remoteLockSubContainerStyles}>
                {accordionData.map((accordion, index) => (
                    <Accordion
                        key={index}
                        defaultExpanded={index === defaultExpandedIndex}
                        sx={{ width: "1150px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index + 1}-content`}
                            id={`panel${index + 1}-header`}>
                            {accordion.title}
                        </AccordionSummary>
                        <AccordionActions
                            sx={{
                                justifyContent: "flex-start",
                                padding: "20px",
                            }}>
                            {accordion.buttons.map((button, btnIndex) => (
                                <Button
                                    key={btnIndex}
                                    sx={{
                                        width: "110px",
                                        height: "60px",
                                        padding: "8px 16px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        fontFamily: "Arial, sans-serif",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        whiteSpace:
                                            btnIndex === 2
                                                ? "nowrap"
                                                : "normal",
                                    }}>
                                    {button}
                                </Button>
                            ))}
                        </AccordionActions>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default AccordionUsage;
