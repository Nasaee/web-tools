import './Card.css';
const Card = ({ name, link, icon, description }) => {
  return (
    <div className="card" key={name}>
      <img src={icon} alt="" />
      <a href={link}>{name}</a>
      <p>{description}</p>
    </div>
  );
};
export default Card;
