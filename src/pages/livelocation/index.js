import React from "react";
import styles from "./styles.module.css";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

const LiveLocation = () => {
    const [value, setValue] = React.useState(dayjs("2022-04-17"));
    return (
        <div className={styles.liveLoactionContainerStyles}>
            <div className={styles.searchAndInputsBlockStyles}>
                <div>
                    <TextField
                        label="Search"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                        <DatePicker
                            label="Uncontrolled picker"
                            defaultValue={dayjs("2022-04-17")}
                        />
                        <DatePicker
                            label="Controlled picker"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
            <iframe
                title="Eiffel Tower Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6159864518653!2d2.2944812156744985!3d48.85837006160742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x265c0fa16be29f5!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1619431166160!5m2!1sen!2sfr"
                width="1150"
                height="650"
                style={{ border: 0 }}
                overflowY="scroll"
                allowFullScreen=""
                loading="lazy"></iframe>
        </div>
    );
};

export default LiveLocation;
