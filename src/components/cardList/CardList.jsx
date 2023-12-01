import { useEffect, useState } from "react";
import CardItem from "../cardItem/CardItem";
import "./CardList.scss";

const CardList = () => {
  const [beerData, setBeerDate] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((beerDataObj) => setBeerDate(beerDataObj))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="section-all-products">
      {beerData?.map((beerDataObj) => {
        const { _id, name, tagline, image_url } = beerDataObj;
        return (
          <CardItem
            key={_id}
            id={_id}
            beerName={name}
            beerTagline={tagline}
            beerImgUrl={image_url}
          />
        );
      })}
    </section>
  );
};

export default CardList;
