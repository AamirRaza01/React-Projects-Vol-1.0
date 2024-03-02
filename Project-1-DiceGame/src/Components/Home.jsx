import styled from "styled-components";

function Home({toggle}) {
  return (
    <Container>
      <img src="/images/dices.png" alt="" />
      <div className="hero-content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  max-height: 100vh;
  height: 100vh;
  align-items: center;
  margin: 0 auto;
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 73px;
  border-radius: 5px;
  outline: none;
  border: 1.6px solid transparent;
  cursor: pointer;
  &:hover{
    background-color: #ffffff;
    color: black;
    border: 1.6px solid black;
    transition: all .35s ease-in-out;
  }
`;
