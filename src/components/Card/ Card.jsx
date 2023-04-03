import './Card.css';
const Card = ({ name, link, icon, description }) => {
  return (
    <div className="card" key={name}>
      <div className="web-icon-wrapper">
        <img src={icon} alt="web icon" className="web-icon-img" />
      </div>
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
