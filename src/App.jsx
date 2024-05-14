import { useState, useEffect } from "react";
import Score from "./components/score";
import Grid from "./components/Grid";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [cards, setCards] = useState([]);

  // ******************************************************************************************************************************
  // This was the way in whihc you wait for each call to fecth first and then move to next one. In the case 2 you call al tgether then wait in the end
  // for all to complete then setCards

  // useEffect(() => {
  //   async function fetchPokemonData() {
  //     try {
  //       const pokemonIds = [4, 7, 25, 37, 63, 78, 133, 147]; // Example Pokémon IDs
  //       const pokemonData = [];

  //       for (const pokemonId of pokemonIds) {
  //         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         const data = await response.json();
  //         const pokemon = {
  //           name: data.name,
  //           image: data.sprites.front_default,
  //           clicked: false,
  //         };
  //         pokemonData.push(pokemon);
  //       }

  //       setCards(pokemonData);
  //     } catch (error) {
  //       console.error("Error fetching Pokémon data:", error);
  //     }
  //   }

  //   fetchPokemonData();
  // }, []);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const pokemonIds = [3, 11, 12, 9, 10, 13, 100, 69, 70, 79];

        const promises = pokemonIds.map(async (pokemonId) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return {
            name: data.name,
            image: data.sprites.other.home.front_default,
            clicked: false,
          };
        });

        const pokemonData = await Promise.all(promises);
        setCards(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }

    fetchPokemonData();
  }, []);

  // ************************************************************************************************************************************************************************************

  const handleScore = () => {
    setScore((prevScore) => {
      const newScore = prevScore + 1;
      if (newScore > maxScore) {
        setMaxScore(newScore);
      }
      return newScore;
    });
    console.log(cards);
    console.log("cards");
  };
  const handleResetScore = () => {
    setScore(0);
  };

  return (
    <>
      <h1>Memory Game</h1>
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
