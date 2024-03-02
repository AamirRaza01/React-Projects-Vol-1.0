import styled from "styled-components";
import TotalScore from "./TotalScore";
import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const showRulePage = () => {
    setShowRules((prev) => !prev);
  };

  const resetGame = () => {
    setScore(0);
    setError("");
    setSelectedNumber(undefined);
    setCurrentDice(1);
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceStatus = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top-panel">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice currentDice={currentDice} diceStatus={diceStatus} />
      <div className="btns">
        <OutlineButton onClick={resetGame}>Reset Game</OutlineButton>
        <Button onClick={showRulePage}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules ? <Rules /> : <></>}
      {/* {showRules && <Rules/>} */}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  .top-panel {
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
  }
  .btns {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 30px auto;
  }
`;
