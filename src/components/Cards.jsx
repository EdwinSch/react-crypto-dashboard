import BTC from "../assets/btc.png";
import ETH from "../assets/ether.png";
import USDT from "../assets/tether.png";
import DOGE from "../assets/doge.png";

const Cards = ({ exchange }) => {
  return (
    <section className="main-cards-container">
      {exchange.map((coin) => {
        // Destructure
        const { id, symbol, name, priceUsd } = coin;

        return (
          <article className="main-card" key={id}>
            {name}
          </article>
        );
      })}
    </section>
  );
};

export default Cards;
