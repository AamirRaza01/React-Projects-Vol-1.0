import { useState } from "react";
import styled from "styled-components";

function RollDice({ currentDice, diceStatus }) {
  return (
    <Rolling>
      <div className="image-container" onClick={diceStatus}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </Rolling>
  );
}

export default RollDice;

const Rolling = styled.div`
  max-width: 1180px;
  width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-container img {
    width: 180px;
    height: 180px;
    cursor: pointer;
  }
  p {
    font-size: 22px;
  }
`;
