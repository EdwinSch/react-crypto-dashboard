import BTC from "../assets/BTC.png";
import ETH from "../assets/ETH.png";
import USDT from "../assets/USDT.png";
import DOGE from "../assets/DOGE.png";

import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { useState } from "react";

const Cards = ({ exchange }) => {
  // State for dynamic percentage
  const [priceChange, setPriceChange] = useState(true);

  return (
    <section className="main-cards-container">
      {exchange.map((coin) => {
        // Destructure
        const { id, symbol, name, priceUsd, changePercent24Hr } = coin;

        // Convert incoming PRICE string to float number
        let priceConversion = parseFloat(priceUsd).toFixed(2);
        // Convert incoming PERCENTAGE string to float number
        let percentConversion = parseFloat(changePercent24Hr).toFixed(2);

        return (
          <article className="main-card" key={id}>
            <div className="card-header">
              <img src={eval(symbol)} alt={name} />
              <h3>{name}</h3>
            </div>
            <p className="value">${priceConversion}</p>
            <p className="percentage" style={{ color: "green" }}>
              <span>
                {priceChange ? <VscTriangleUp /> : <VscTriangleDown />}
              </span>
              {percentConversion}% (24Hr)
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Cards;
