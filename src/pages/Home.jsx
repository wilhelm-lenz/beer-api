import { Link } from "react-router-dom";
import apiCardsInfos from "../data/apiCardsInfoData.json";

const Home = () => {
  return (
    <main className="main">
      {apiCardsInfos.map((apiCardInfo) => {
        const { _id, img, title, description } = apiCardInfo;
        return (
          <Link>
            <article key={_id} className="section-beers">
              <img src={img} alt={"Picture of " + title} />
              <h2 className="api-title">{title}</h2>
              <p className="api-description">{description}</p>
            </article>
          </Link>
        );
      })}
    </main>
  );
};

export default Home;
