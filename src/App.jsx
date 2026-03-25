import { useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import { fetchCoinByMarket } from "./services/fetchCoinByMarkets";
import CoinTable from "./components/Cointable/CoinTable";
function App() {


  return (
    <div>
      <Navbar />
      <Banner />
      <CoinTable />
    </div>
  );
}

export default App;
