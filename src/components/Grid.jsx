// import { useState } from "react";
import Card from "./card";

const Grid = ({ onScore, onReset, cards, setCards }) => {
  const handleClick = (cardName) => {
    const newcards = cards.map((item) => {
      if (item.name === cardName) {
        if (item.clicked) {
          onReset();
        } else {
          onScore();
        }
        return { ...item, clicked: true };
      }
      return item;
    });
    setCards(newcards);
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
