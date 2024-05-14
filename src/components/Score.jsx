// import { useState } from "react";
const Score = ({ score, maxScore }) => {
  return (
    <>
      <h2>Score : {score}</h2>
      <h2>High Score : {maxScore}</h2>
    </>
  );
};

export default Score;
