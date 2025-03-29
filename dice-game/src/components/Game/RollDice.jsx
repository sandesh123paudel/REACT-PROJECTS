import React, { useState } from "react";
import styled from "styled-components";

const RollDice = () => {
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
  };

  console.log(generateRandomNumber);
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`images/dice_${currentDice}.png`} alt="Dice 1" srcset="" />

        <p>Click on Dice to Roll</p>
      </div>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  cursor: pointer;
`;
