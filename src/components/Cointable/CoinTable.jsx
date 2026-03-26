import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinByMarket } from "../../services/fetchCoinByMarkets";
import CoinRow from "./CoinRow";

const CoinTable = () => {
  // Access the client
  const [page, setPage] = useState(1);

  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoinByMarket("usd", page),
    retry: 1,
    staleTime: 2 * 60 * 1000,
  });

  return (
    <div className="mx-[5rem] ">
      <div className="bg-green-500 font-extrabold  text-white flex gap-4 h-10 justify-center items-center border-2 border-amber-50  rounded-lg">
        <div className="basis-[30%] flex px-5 items-center">Coin</div>
        <div className="basis-[20%]  flex px-5 items-center">Price</div>
        <div className="basis-[20%]  flex px-5 items-center">24hr Change</div>
        <div className="basis-[30%]  flex px-5 items-center">Market Cap</div>
      </div>
      {isLoading && <div> Loading .....</div>}
      {data &&
        data.map((coin) => (
          <div key={coin.id}>
            <CoinRow row={coin} />
          </div>
        ))}

      <div className="relative flex px-[15rem] justify-around">
        <div>
          <button
            disabled={page == 1}
            onClick={() => setPage(page - 1)}
            className="btn btn-soft btn-primary rounded-2xl absolute bottom-1"
          >
            Prev Page
          </button>
        </div>
        <div>
          <button
            className="btn btn-soft btn-accent rounded-2xl absolute bottom-1"
            onClick={() => setPage(page + 1)}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinTable;
