import { useState } from "react";
import GamePlay from "./Components/GamePlay";
import Home from "./Components/Home";

function App() {
  const [isGamePlayStarted, setIsGamePlayStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGamePlayStarted((prev) => !prev);
  };

  return (
    <>
      {isGamePlayStarted ? <GamePlay /> : <Home toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
