import React, { useState } from "react";
import styles from "./Game.module.css";
import Button from "../Button/Button";
import styled from "styled-components";
import RollDice from "./RollDice";

const Game = () => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const [selectedNumber, setSelectedNumber] = useState();

  console.log(selectedNumber);

  return (
    <>
      <div className={styles.upper}>
        <div className={styles.score}>
          <h2>0</h2>
          <p>Total Score</p>
        </div>
        <div className={styles.dice_number}>
          <div className={styles.buttons}>
            {arrNum.map((num, i) => (
              <Box
                isSelected={num === selectedNumber}
                key={i}
                onClick={() => setSelectedNumber(num)}
              >
                {num}
              </Box>
            ))}
          </div>
          <p>Select Number</p>
        </div>
      </div>

      <div className={styles.lower}>
        <RollDice />

        <Button title={"Reset Score"} onClick={""} />
        <Button title={"Show Rules"} onClick={""} />
      </div>
    </>
  );
};

export default Game;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.isSelected ? "white" : "black")};
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  cursor: pointer;
`;
