import BTC from "../assets/btc.png";
import ETH from "../assets/ether.png";
import USDT from "../assets/tether.png";
import DOGE from "../assets/doge.png";

import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";

const Cards = ({ exchange }) => {
  return (
    <section className="main-cards-container">
      {exchange.map((coin) => {
        // Destructure
        const { id, symbol, name, priceUsd } = coin;
        // Convert incoming string to float number
        let conversion = parseFloat(priceUsd).toFixed(2);

        return (
          <article className="main-card" key={id}>
            <div className="card-header">
              <img src={BTC} alt={name} />
              <h3>{name}</h3>
            </div>
            <p className="value">${conversion}</p>
            <p className="percentage">
              <span>
                <VscTriangleUp />
              </span>
              12% Today
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Cards;
