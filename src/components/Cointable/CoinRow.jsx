import React from "react";
import { useNavigate } from "react-router-dom";

const CoinRow = ({ row }) => {
  const navigate = useNavigate();
  const redirectCoinDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className="bg-amber-200 font-semibold  text-black flex gap-4 h-15 justify-center items-center border-2  rounded-md cursor-pointer"
      onClick={() => redirectCoinDetails(row.id)}
    >
      <div className="basis-[30%] flex px-5 items-center ">
        <div className="flex gap-4">
          <div className="h-10 w-10">
            <img className="h-full w-full" src={row.image} alt={row.name} />
          </div>
          <div className="flex-col justify-start">
            <div className="font-extrabold">{row.name}</div>
            <div>{row.symbol}</div>
          </div>
        </div>
      </div>
      <div className="basis-[20%]  flex px-5 items-center">
        {row["current_price"]}
      </div>
      <div className="basis-[20%]  flex px-5 items-center">
        {row["price_change_24h"]}
      </div>
      <div className="basis-[30%]  flex px-5 items-center">
        {row["market_cap"]}
      </div>
    </div>
  );
};

export default CoinRow;
