import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetails from "../../pages/CoinDetails";
import Layout from "../../pages/Layout";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/details/:coinId" element={<CoinDetails />} />
      </Route>
    </Routes>
  );
};

export default Routing;
