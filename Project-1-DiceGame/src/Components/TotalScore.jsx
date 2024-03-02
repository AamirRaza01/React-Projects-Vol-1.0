import styled from "styled-components";

function TotalScore({ score }) {
  return (
    <Score>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Score>
  );
}

export default TotalScore;

const Score = styled.div`
  max-height: 150px;
  text-align: center;
  h1 {
    font-size: 80px;
    line-height: 100px;
    font-weight: 600;
  }
  p {
    font-size: 22px;
    font-weight: 500;
  }
`;
