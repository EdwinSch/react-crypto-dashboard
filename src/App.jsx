import Header from "./components/Header";
import Cards from "./components/Cards";

import { useState, useEffect } from "react";
import SubCards from "./components/SubCards";

const url =
  "https://api.coincap.io/v2/assets/?ids=bitcoin,ethereum,tether,dogecoin";

function App() {
  // States
  const [exchange, setExchange] = useState([]);

  // Fetch from API
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const cryptoData = await response.json();
      // console.log(data);
      setExchange(cryptoData.data);
    } catch (error) {
      console.log(error);
    }
  };

  // UseEffect Fetch
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-top" aria-hidden="true"></div>
      <main>
        <Header />
        <Cards exchange={exchange} />
        <SubCards exchange={exchange} />
      </main>
    </>
  );
}

export default App;
