import { Link } from "react-router-dom";
import CardList from "../components/cardList/CardList";
import "./AllProducts.scss";
import BackHome from "../components/svg/BackHome";

const AllProducts = () => {
  return (
    <main className="all-products-main container" id="top">
      <Link to="/">
        <BackHome />
      </Link>
      <CardList />
    </main>
  );
};

export default AllProducts;
