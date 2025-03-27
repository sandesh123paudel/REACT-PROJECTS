import React from "react";
import styles from "./Game.module.css";
import Button from "../Button/Button";

const Game = () => {
  return (
    <>
      <div className={styles.upper}>
        <div className={styles.score}>
          <h2>0</h2>
          <p>Total Score</p>
        </div>
        <div className={styles.dice_number}>
          <div className={styles.buttons}>
            <button className={styles.number_button}>1</button>
            <button className={styles.number_button}>2</button>
            <button className={styles.number_button}>3</button>
            <button className={styles.number_button}>4</button>
            <button className={styles.number_button}>5</button>
            <button className={styles.number_button}>6</button>
          </div>
          <p>Select Number</p>
        </div>
      </div>

      <div className={styles.lower}>
        <div className="img">
          <img src="images/dice_1.png" alt="Dice 1" srcset="" />
        </div>

        <p>Click on Dice to Roll</p>

        <Button title={"Reset Score"} />
        <Button title={"Show Rules"} />
      </div>
    </>
  );
};

export default Game;
