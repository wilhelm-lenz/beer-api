import { useEffect, useState } from "react";

const AllProducts = () => {
  const [beerData, setBeerDate] = useState(null);

  const handleClick = () => {};

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((beerData) => setBeerDate(beerData))
      .catch((error) => console.log(error));
  }, []);

  console.log();

  return <div></div>;
};

export default AllProducts;
