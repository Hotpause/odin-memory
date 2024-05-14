const Card = ({ name, image, onClick }) => {
  return (
    <button onClick={onClick}>
      <img className="pokemon-image" src={image} alt={name} />
      <h3>{name.toUpperCase()}</h3>
    </button>
  );
};

export default Card;
