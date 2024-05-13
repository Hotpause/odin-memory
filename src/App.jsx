// import { useState } from "react";
import Score from "./components/score";
import Grid from "./components/grid";

import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  const handleScore = () => {
    setScore(score + 1);
  };
  return (
    <>
      <h1>Memory Project HotPause</h1>
      <Score score={score} />
      <Grid incScore={handleScore} />
    </>
  );
}

export default App;
