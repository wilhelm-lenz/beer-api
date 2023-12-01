import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id: paramsId } = useParams();

  const [allBeerData, setAllBeerData] = useState([]);
  const [randomBeerData, setRandomBeerData] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((beerDataObj) => setAllBeerData(beerDataObj))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((randomBearDataObj) => setRandomBeerData(randomBearDataObj))
      .catch((error) => console.log(error));
  }, []);

  const concatBeerData = randomBeerData
    ? [...allBeerData, randomBeerData]
    : allBeerData;
  const beer = concatBeerData.find((beerObj) => beerObj?._id === paramsId);

  if (!beer) {
    return <div>Loading...</div>;
  }

  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
  } = beer;

  return (
    <section>
      <img src={image_url} alt={`Picture of ${name} Beer`} />
      <h3>{name}</h3>
      <p>{tagline}</p>
      <div>
        <p>First brewed:</p>
        <p>{first_brewed}</p>
      </div>
      <div>
        <p>Attenuation level:</p>
        <p>{attenuation_level}</p>
      </div>
      <p>{description}</p>
    </section>
  );
};

export default ProductDetails;
