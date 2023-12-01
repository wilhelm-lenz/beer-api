import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import apiCardsInfos from "../data/apiCardsInfoData.json";
import { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
  const [beerId, setBeerId] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((beerDataObj) => setBeerId(beerDataObj?._id))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="home-main container">
      {apiCardsInfos?.map((apiCardInfo, index) => {
        const { img, title, description, link } = apiCardInfo;
        return (
          <article key={uuidv4()} className="card-beers">
            <Link
              to={index === 0 ? link : link + `/random-product/${beerId}`}
              className="card-beers-anchor-link"
            >
              <img
                src={img}
                alt={"Picture of " + title}
                className="card-beers-api-img"
              />
              <h2 className="card-beers-api-title">{title}</h2>
              <p className="card-beers-api-description">{description}</p>
            </Link>
          </article>
        );
      })}
    </main>
  );
};

export default Home;
