import React from "react";
import banner from "../../assets/crypto-start-path-banner.png";

const Banner = () => {
  return (
    <div className="relative w-full">
      <img
        className="h-50 w-full object-cover"
        src={banner}
        alt="Crypto-banner"
      />
      <div className="absolute top-15 left-0 right-0 mx-auto">
        <div className="flex flex-col gap-4 items-center">
          <div className="font-extrabold text-white text-5xl">
            Crypto Tracker
          </div>
          <div className="font-bold text-white text-2xl">
            Find all Currencies
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
