import { Link } from "react-router-dom";
import "./CardItem.scss";

const CardItem = ({ id, beerName, beerTagline, beerImgUrl }) => {
  return (
    <article className="card-item">
      <img
        src={beerImgUrl}
        alt={"Beer from " + beerName}
        className="card-item-img"
      />
      <div className="card-item-details">
        <h3 className="card-item-title">{beerName}</h3>
        <p className="card-item-tagline">{beerTagline}</p>
        <p className="card-item-created-info">Created by {beerName}</p>
        <Link to={`/product-detail/${id}`}>Details</Link>
      </div>
    </article>
  );
};

export default CardItem;
