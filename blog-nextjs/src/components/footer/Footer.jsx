import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            Footer
            <p>Footer Test 1</p>
            <p className={styles.dragon}>Footer Test 2</p>
        </div>
    );
};

export default Footer;
