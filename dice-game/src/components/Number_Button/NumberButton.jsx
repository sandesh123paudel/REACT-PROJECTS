import React from "react";
import styles from "./NumberButton.module.css";
const NumberButton = (props) => {
  return <button className={styles.normal}>{props.number}</button>;
};

export default NumberButton;
