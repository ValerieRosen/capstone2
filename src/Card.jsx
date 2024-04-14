import "./Card.css";
import "./App.css";

const ItemCard = () => {
  return (
    <div className="card-container">
      <img
        src="https://fortnite-api.com/images/map_en.png"
        alt="Card Image"
        className="card-img"
      ></img>
      <h1 className="card-title">Card</h1>
      <p className="card-description">Card description</p>
      <a href="cardPage" className="card-btn">
        Learn More
      </a>
    </div>
  );
};

export default ItemCard;
