import React from "react";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";

export const DoubleBanner = () => {
  return (
    <div className="flex ml-10 mr-10 rounded-l">
      <div className="w-1/6">
        <img src={banner1} className="w-full" alt="" />
      </div>
      <div className="w-1/6">
        <img src={banner2} className="w-full" alt="" />
      </div>
        <div className="w-1/6">
            <img src={banner1} className="w-full" alt="" />
        </div>
        <div className="w-1/6">
            <img src={banner2} className="w-full" alt="" />
        </div>
        <div className="w-1/6">
            <img src={banner1} className="w-full" alt="" />
        </div>
        <div className="w-1/6">
            <img src={banner2} className="w-full" alt="" />
        </div>
    </div>
  );
};
