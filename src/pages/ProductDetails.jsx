import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./ProductDetails.scss";
import BackHome from "../components/svg/BackHome";

const ProductDetails = () => {
  const { id: paramsId } = useParams();

  const location = useLocation().pathname;
  const locationName = location.split("/").slice(-2, -1).join();

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

  if (!beer || !randomBeerData || !allBeerData) {
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
    <section className="section-product-detail container">
      <div className="links-wrapper">
        <Link to={locationName === "random-product" ? "/" : "/all-products"}>
          <BackHome />
        </Link>
        {locationName !== "random-product" ? (
          <Link to="/" className="back-home">
            Back Home
          </Link>
        ) : null}
      </div>
      <article className="product-details">
        <img
          src={image_url}
          alt={`Picture of ${name} Beer`}
          className="product-details-img"
        />
        <div className="product-details-wrapper">
          <h3 className="product-details-title">{name}</h3>
          <p className="product-details-tagline">{tagline}</p>
          <div className="product-details-brewed-wrapper">
            <p className="product-details-brewed">First brewed:</p>
            <p className="product-details-brewed">{first_brewed}</p>
          </div>
          <div className="product-details-attenuation-wrapper">
            <p className="product-details-attenuation">Attenuation level:</p>
            <p className="product-details-attenuation">{attenuation_level}</p>
          </div>
          <p className="product-details-description">{description}</p>
        </div>
      </article>
    </section>
  );
};

export default ProductDetails;
