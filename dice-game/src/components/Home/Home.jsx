import React from "react";
import styles from "./Home.module.css";
import Button from "../Button/Button";

const Home = ({ toggle }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="images/dices.png" alt="" />
        </div>
        <div className={styles.content}>
          <h1>DICE GAME</h1>

          <Button title={"Play Now"} onClick={toggle} />
        </div>
      </div>
    </div>
  );
};

export default Home;
