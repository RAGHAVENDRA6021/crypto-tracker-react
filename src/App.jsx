import { useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import { fetchCoinByMarket } from "./services/fetchCoinByMarkets";
function App() {
  useEffect(() => {
    fetchCoinByMarket();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
