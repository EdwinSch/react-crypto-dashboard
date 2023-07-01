const Cards = ({ exchange }) => {
  return (
    <section className="main-cards">
      {exchange.map((coin) => {
        // Destructure
        const { id, symbol, name, priceUsd } = coin;

        return <article key={id}>{name}</article>;
      })}
    </section>
  );
};

export default Cards;
