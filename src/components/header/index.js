import React from "react";
import styles from "./styles.module.css";
import { logo } from "../../resources/images";

const Header = () => {
    return (
        <div className={styles.headerContainerStyles}>
            <div className={styles.headerSubContainerStyles}>
                <div className={styles.rightLogViewStyles}>
                    <img src={logo} alt="logo" className={styles.imgStyles} />
                </div>
                <div className={styles.leftHeadingViewStyles}>
                    Section Heading
                </div>
            </div>
        </div>
    );
};

export default Header;
