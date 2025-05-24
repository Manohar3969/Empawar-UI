import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import dress1 from "../assets/dress1.jpeg";
import dress2 from "../assets/dress2.jpeg";
import dress3 from "../assets/dress3.jpeg";
import dress4 from "../assets/dress4.jpeg";
import dress5 from "../assets/dress5.jpeg";
import { OrdersList } from "../components/Orders/OrdersList";

export const Orders = () => {
  return (
    <div>
      <Header></Header>

      <div className="w-full flex float-left">
        <div className="w-full overflow-auto p-10 bg-gray-100 ml-5 mr-3 rounded-lg">
          <div className="flex w-full pb-4 font-bold text-3xl">
            Your Orders
          </div>

          <div className="w-full overflow-auto">
            <div className="border-b-2 pb-4 border-gray-300">
              <input type="checkbox" />
              <span className="pl-5">Select all Items</span>
            </div>

            <OrdersList productImage={dress1}></OrdersList>
            <OrdersList productImage={dress2}></OrdersList>
            <OrdersList productImage={dress3}></OrdersList>
            <OrdersList productImage={dress4}></OrdersList>
            <OrdersList productImage={dress5}></OrdersList>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
