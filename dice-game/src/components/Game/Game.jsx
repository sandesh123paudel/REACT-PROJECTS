import React from "react";
import styles from "./Game.module.css";
import Button from "../Button/Button";
import NumberButton from "../Number_Button/NumberButton";

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
            <NumberButton number={"1"} />
            <NumberButton number={"2"} />
            <NumberButton number={"3"} />
            <button className={styles.active}>4</button>
            {/* <NumberButton number={"4"} /> */}
            <NumberButton number={"5"} />
            <NumberButton number={"6"} />
          </div>
          <p>Select Number</p>
        </div>
      </div>

      <div className={styles.lower}>
        <img src="images/dice_1.png" alt="Dice 1" srcset="" />

        <p>Click on Dice to Roll</p>

        <Button title={"Reset Score"} />
        <Button title={"Show Rules"} />
      </div>
    </>
  );
};

export default Game;
