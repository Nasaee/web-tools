import './Card.css';
const Card = ({ name, link, icon, description }) => {
  return (
    <div className="card" key={name}>
      <img src={icon} alt="web icon" className="web-icon" />
      <h3 className="web-name-link">
        <a href={link} target="_blank">
          {name}
        </a>
      </h3>
      <p className="web-description">{description}</p>
    </div>
  );
};
export default Card;
