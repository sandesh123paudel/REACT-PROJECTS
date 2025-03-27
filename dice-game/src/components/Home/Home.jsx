import React from "react";
import styles from "./Home.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="images/dices.png" alt="" />
        </div>
        <div className={styles.content}>
          <h1>DICE GAME</h1>
          <Link to={"/game"}>
            <Button title={"Play Now"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
