const Card = ({ name, price, image }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>Price: {price}</p>
    </div>
  );
};

export default Card;
