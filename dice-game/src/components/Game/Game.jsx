import React, { useState } from "react";
import styles from "./Game.module.css";
import Button from "../Button/Button";
import styled from "styled-components";
import RollDice from "./RollDice";
import Rules from "./Rules";

const Game = () => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [match, setMatch] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setMatch("");
      setError("Plese select a number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setMatch(" Wow !! You got a match !!");
      setScore((prev) => prev + 1);
    }

    setSelectedNumber(undefined);
  };

  const numberSelectorHandler = (num) => {
    setSelectedNumber(num);
    setMatch("");
    setError("");
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <div className={styles.upper}>
        <div className={styles.score}>
          <h2>{score}</h2>
          <p>Total Score</p>
        </div>
        <div className={styles.dice_number}>
          <div className={styles.errorMessage}>{error}</div>
          <div className={styles.matchMessage}>{match}</div>
          <div className={styles.buttons}>
            {arrNum.map((num, i) => (
              <Box
                isSelected={num === selectedNumber}
                key={i}
                onClick={() => numberSelectorHandler(num)}
              >
                {num}
              </Box>
            ))}
          </div>
          <p>Select Number</p>
        </div>
      </div>

      <div className={styles.lower}>
        <RollDice currentDice={currentDice} rollDice={rollDice} />

        <Button title={"Reset Score"} onClick={resetScore} />
        <Button
          title={`${showRules ? "Hide" : "Show"} Rules`}
          onClick={() => setShowRules((prev) => !prev)}
        />
      </div>

      {showRules && <Rules />}
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
