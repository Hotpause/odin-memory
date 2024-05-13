const Card = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

export default Card;
