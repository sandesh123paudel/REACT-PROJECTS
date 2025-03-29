import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
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
