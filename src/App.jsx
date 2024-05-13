import { useState } from "react";
import Score from "./components/score";
import Grid from "./components/grid";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const pokemons = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const [cards, setCards] = useState(
    pokemons.map((name) => ({
      name: name,
      clicked: false,
    }))
  );

  const handleScore = () => {
    setScore((s) => s + 1);
    if (score + 1 > maxScore) {
      setMaxScore(score + 1);
    }
  };
  const handleResetScore = () => {
    const newCards = cards.map((card) => ({ ...card, clicked: false }));
    setCards(newCards);
    console.log(newCards); // Log the updated cards array
    setScore(0);
  };

  return (
    <>
      <h1>Memory Project HotPause</h1>
      <Score score={score} maxScore={maxScore} />
      <Grid
        onScore={handleScore}
        onReset={handleResetScore}
        cards={cards}
        setCards={setCards}
      />
    </>
  );
}

export default App;
