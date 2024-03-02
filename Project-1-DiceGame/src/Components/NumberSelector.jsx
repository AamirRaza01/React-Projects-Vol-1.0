import styled from "styled-components";

function NumberSelector({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) {
  const diceNumber = [1, 2, 3, 4, 5, 6];

  const selectNumberHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <SelectionContainer className="selectionContainer">
      <p className="error">{error}</p>
      <div className="boxContainer">
        {diceNumber.map((value, i) => (
          <NumberBox
            key={i}
            onClick={() => selectNumberHandler(value)}
            isSelectedNumber={value == selectedNumber}
          >
            {value}
          </NumberBox>
        ))}
      </div>
      <p>Select a number</p>
    </SelectionContainer>
  );
}

export default NumberSelector;

const NumberBox = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) => (props.isSelectedNumber ? "black" : "white")};
  color: ${(props) => (!props.isSelectedNumber ? "black" : "white")};
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;

  .boxContainer {
    display: flex;
    gap: 10px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
    font-size: 22px;
  }
`;
