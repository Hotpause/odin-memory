// import { useState } from "react";
import Card from "./card";
import shuffleArray from "./shuffle";

const Grid = ({ onScore, onReset, cards, setCards }) => {
  const handleClick = (cardName) => {
    const isCardClicked = cards.find(
      (item) => item.name === cardName && item.clicked
    );

    if (isCardClicked) {
      onReset();
      const newCards = cards.map((item) => ({ ...item, clicked: false }));
      setCards(newCards);
    } else {
      const newCards = cards.map((item) => {
        if (item.name === cardName) {
          onScore();
          return { ...item, clicked: true };
        }
        return item;
      });
      setCards(shuffleArray(newCards));
    }
  };

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          clicked={card.clicked}
          onClick={() => handleClick(card.name)}
        />
      ))}
    </div>
  );
};

export default Grid;
